"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainApplicationService = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const IGitBranchBusinessRuleDomainService_1 = require("../../Domain/Services/Core/IGitBranchBusinessRuleDomainService");
const IGitEventBusinessRuleDomainService_1 = require("../../Domain/Services/Core/IGitEventBusinessRuleDomainService");
const IGitPullRequestBusinessRuleDomainService_1 = require("../../Domain/Services/Core/IGitPullRequestBusinessRuleDomainService");
const IGitPullRequestEventBusinessRuleDomainService_1 = require("../../Domain/Services/Core/IGitPullRequestEventBusinessRuleDomainService");
const IActionResultApplicationService_1 = require("../Core/IActionResultApplicationService");
const IGitAuthenticationApplicationService_1 = require("../Core/IGitAuthenticationApplicationService");
const IGitBranchApplicationService_1 = require("../Core/IGitBranchApplicationService");
const IGitDefaultBranchNameApplicationService_1 = require("../Core/IGitDefaultBranchNameApplicationService");
const IGitEventApplicationService_1 = require("../Core/IGitEventApplicationService");
const IGitPullRequestApplicationService_1 = require("../Core/IGitPullRequestApplicationService");
const IGitPullRequestEventApplicationService_1 = require("../Core/IGitPullRequestEventApplicationService");
const IGitRepositoryApplicationService_1 = require("../Core/IGitRepositoryApplicationService");
const IGitSourceBranchNameApplicationService_1 = require("../Core/IGitSourceBranchNameApplicationService");
const IGitTargetBranchNameApplicationService_1 = require("../Core/IGitTargetBranchNameApplicationService");
let MainApplicationService = class MainApplicationService {
    constructor(gitEventApplicationService, gitEventBusinessRuleDomainService, gitPullRequestEventApplicationService, gitPullRequestEventBusinessRuleDomainService, gitDefaultBranchNameApplicationService, gitSourceBranchNameApplicationService, gitTargetBranchNameApplicationService, gitPullRequestBusinessRuleDomainService, gitPullRequestApplicationService, gitBranchBusinessRuleDomainService, gitAuthenticationApplicationService, gitRepositoryApplicationService, gitBranchApplicationService, actionResultApplicationService) {
        this.gitEventApplicationService = gitEventApplicationService;
        this.gitEventBusinessRuleDomainService = gitEventBusinessRuleDomainService;
        this.gitPullRequestEventApplicationService = gitPullRequestEventApplicationService;
        this.gitPullRequestEventBusinessRuleDomainService = gitPullRequestEventBusinessRuleDomainService;
        this.gitDefaultBranchNameApplicationService = gitDefaultBranchNameApplicationService;
        this.gitSourceBranchNameApplicationService = gitSourceBranchNameApplicationService;
        this.gitTargetBranchNameApplicationService = gitTargetBranchNameApplicationService;
        this.gitPullRequestBusinessRuleDomainService = gitPullRequestBusinessRuleDomainService;
        this.gitPullRequestApplicationService = gitPullRequestApplicationService;
        this.gitBranchBusinessRuleDomainService = gitBranchBusinessRuleDomainService;
        this.gitAuthenticationApplicationService = gitAuthenticationApplicationService;
        this.gitRepositoryApplicationService = gitRepositoryApplicationService;
        this.gitBranchApplicationService = gitBranchApplicationService;
        this.actionResultApplicationService = actionResultApplicationService;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            var gitEventType = this.gitEventApplicationService.getGitEventType();
            if (this.gitEventBusinessRuleDomainService.isAllowedGitEventType(gitEventType)) {
                var gitPullRequestEventType = this.gitPullRequestEventApplicationService.getGitPullRequestEventType();
                if (this.gitPullRequestEventBusinessRuleDomainService.isAllowedGitPullRequestEventType(gitPullRequestEventType)) {
                    var gitDefaultBranchName = this.gitDefaultBranchNameApplicationService.getGitDefaultBranchName();
                    var gitSourceBranchName = this.gitSourceBranchNameApplicationService.getGitSourceBranchName();
                    var gitTargetBranchName = this.gitTargetBranchNameApplicationService.getGitTargetBranchName();
                    if (this.gitPullRequestBusinessRuleDomainService.isHotfixBranchMerge(gitSourceBranchName, gitTargetBranchName, gitDefaultBranchName)) {
                        if (this.gitPullRequestApplicationService.isPullRequestMerged()) {
                            var developBranchName = "develop";
                            var featureBranchName = this.gitBranchBusinessRuleDomainService.getFeatureBranchNameFromHotfixBranchName(gitSourceBranchName);
                            var gitAuthentication = this.gitAuthenticationApplicationService.getGitAuthentication();
                            var gitRepository = this.gitRepositoryApplicationService.getGitRepository();
                            this.gitBranchApplicationService.renameGitBranch(developBranchName, featureBranchName, gitRepository, gitAuthentication)
                                .then(_ => {
                                this.gitBranchApplicationService.createGitBranch(developBranchName, gitDefaultBranchName, gitRepository, gitAuthentication)
                                    .then(_ => {
                                    this.actionResultApplicationService.setActionResult(true, "Hotfix branch merge success");
                                })
                                    .catch(_ => {
                                    this.actionResultApplicationService.setActionResult(false, "Hotfix branch merge is not allowed: Error when create develop branch");
                                });
                            })
                                .catch(_ => {
                                this.actionResultApplicationService.setActionResult(false, "Hotfix branch merge is not allowed: Error when rename develop branch");
                            });
                        }
                        else {
                            this.actionResultApplicationService.omitActionResult("Omit Hotfix branch merge: Git pull request was not merged");
                        }
                    }
                    else {
                        this.actionResultApplicationService.omitActionResult("Omit Hotfix branch merge: Git pull request between source and target branches are not hotfix branch merge");
                    }
                }
                else {
                    this.actionResultApplicationService.setActionResult(false, "Hotfix branch merge is not allowed: Git pull request event type is not allowed");
                }
            }
            else {
                this.actionResultApplicationService.setActionResult(false, "Hotfix branch merge is not allowed: Git event type is not allowed");
            }
        });
    }
};
MainApplicationService = __decorate([
    __param(0, typescript_ioc_1.Inject),
    __param(1, typescript_ioc_1.Inject),
    __param(2, typescript_ioc_1.Inject),
    __param(3, typescript_ioc_1.Inject),
    __param(4, typescript_ioc_1.Inject),
    __param(5, typescript_ioc_1.Inject),
    __param(6, typescript_ioc_1.Inject),
    __param(7, typescript_ioc_1.Inject),
    __param(8, typescript_ioc_1.Inject),
    __param(9, typescript_ioc_1.Inject),
    __param(10, typescript_ioc_1.Inject),
    __param(11, typescript_ioc_1.Inject),
    __param(12, typescript_ioc_1.Inject),
    __param(13, typescript_ioc_1.Inject),
    __metadata("design:paramtypes", [IGitEventApplicationService_1.IGitEventApplicationService,
        IGitEventBusinessRuleDomainService_1.IGitEventBusinessRuleDomainService,
        IGitPullRequestEventApplicationService_1.IGitPullRequestEventApplicationService,
        IGitPullRequestEventBusinessRuleDomainService_1.IGitPullRequestEventBusinessRuleDomainService,
        IGitDefaultBranchNameApplicationService_1.IGitDefaultBranchNameApplicationService,
        IGitSourceBranchNameApplicationService_1.IGitSourceBranchNameApplicationService,
        IGitTargetBranchNameApplicationService_1.IGitTargetBranchNameApplicationService,
        IGitPullRequestBusinessRuleDomainService_1.IGitPullRequestBusinessRuleDomainService,
        IGitPullRequestApplicationService_1.IGitPullRequestApplicationService,
        IGitBranchBusinessRuleDomainService_1.IGitBranchBusinessRuleDomainService,
        IGitAuthenticationApplicationService_1.IGitAuthenticationApplicationService,
        IGitRepositoryApplicationService_1.IGitRepositoryApplicationService,
        IGitBranchApplicationService_1.IGitBranchApplicationService,
        IActionResultApplicationService_1.IActionResultApplicationService])
], MainApplicationService);
exports.MainApplicationService = MainApplicationService;
//# sourceMappingURL=MainApplicationService.js.map