import { Inject } from "typescript-ioc";
import { IGitBranchBusinessRuleDomainService } from "../../Domain/Services/Core/IGitBranchBusinessRuleDomainService";
import { IGitEventBusinessRuleDomainService } from "../../Domain/Services/Core/IGitEventBusinessRuleDomainService";
import { IGitPullRequestBusinessRuleDomainService } from "../../Domain/Services/Core/IGitPullRequestBusinessRuleDomainService";
import { IGitPullRequestEventBusinessRuleDomainService } from "../../Domain/Services/Core/IGitPullRequestEventBusinessRuleDomainService";
import { IActionResultApplicationService } from "../Core/IActionResultApplicationService";
import { IGitAuthenticationApplicationService } from "../Core/IGitAuthenticationApplicationService";
import { IGitBranchApplicationService } from "../Core/IGitBranchApplicationService";
import { IGitDefaultBranchNameApplicationService } from "../Core/IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "../Core/IGitEventApplicationService";
import { IGitPullRequestApplicationService } from "../Core/IGitPullRequestApplicationService";
import { IGitPullRequestEventApplicationService } from "../Core/IGitPullRequestEventApplicationService";
import { IGitRepositoryApplicationService } from "../Core/IGitRepositoryApplicationService";
import { IGitSourceBranchNameApplicationService } from "../Core/IGitSourceBranchNameApplicationService";
import { IGitTargetBranchNameApplicationService } from "../Core/IGitTargetBranchNameApplicationService";
import { IMainApplicationService } from "../IMainApplicationService";

export class MainApplicationService implements IMainApplicationService {

    private gitEventApplicationService: IGitEventApplicationService;
    private gitEventBusinessRuleDomainService: IGitEventBusinessRuleDomainService;
    private gitPullRequestEventApplicationService: IGitPullRequestEventApplicationService;
    private gitPullRequestEventBusinessRuleDomainService: IGitPullRequestEventBusinessRuleDomainService;
    private gitDefaultBranchNameApplicationService: IGitDefaultBranchNameApplicationService;
    private gitSourceBranchNameApplicationService: IGitSourceBranchNameApplicationService;
    private gitTargetBranchNameApplicationService: IGitTargetBranchNameApplicationService;
    private gitPullRequestBusinessRuleDomainService: IGitPullRequestBusinessRuleDomainService;
    private gitPullRequestApplicationService: IGitPullRequestApplicationService;
    private gitBranchBusinessRuleDomainService: IGitBranchBusinessRuleDomainService;
    private gitAuthenticationApplicationService: IGitAuthenticationApplicationService;
    private gitRepositoryApplicationService: IGitRepositoryApplicationService;
    private gitBranchApplicationService: IGitBranchApplicationService;
    private actionResultApplicationService: IActionResultApplicationService;

    constructor(
        @Inject gitEventApplicationService: IGitEventApplicationService,
        @Inject gitEventBusinessRuleDomainService: IGitEventBusinessRuleDomainService,
        @Inject gitPullRequestEventApplicationService: IGitPullRequestEventApplicationService,
        @Inject gitPullRequestEventBusinessRuleDomainService: IGitPullRequestEventBusinessRuleDomainService,
        @Inject gitDefaultBranchNameApplicationService: IGitDefaultBranchNameApplicationService,
        @Inject gitSourceBranchNameApplicationService: IGitSourceBranchNameApplicationService,
        @Inject gitTargetBranchNameApplicationService: IGitTargetBranchNameApplicationService,
        @Inject gitPullRequestBusinessRuleDomainService: IGitPullRequestBusinessRuleDomainService,
        @Inject gitPullRequestApplicationService: IGitPullRequestApplicationService,
        @Inject gitBranchBusinessRuleDomainService: IGitBranchBusinessRuleDomainService,
        @Inject gitAuthenticationApplicationService: IGitAuthenticationApplicationService,
        @Inject gitRepositoryApplicationService: IGitRepositoryApplicationService,
        @Inject gitBranchApplicationService: IGitBranchApplicationService,
        @Inject actionResultApplicationService: IActionResultApplicationService) {
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

    async start() {
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

                        this.gitBranchApplicationService.renameGitBranch(
                            developBranchName,
                            featureBranchName,
                            gitRepository,
                            gitAuthentication)
                            .then(_ => {
                                this.gitBranchApplicationService.createGitBranch(
                                    developBranchName,
                                    gitDefaultBranchName,
                                    gitRepository,
                                    gitAuthentication)
                                    .then(_ => {
                                        this.actionResultApplicationService.setActionResult(true, "Hotfix branch merge success");
                                    })
                                    .catch(_ => {
                                        this.actionResultApplicationService.setActionResult(false, "Hotfix branch merge is not allowed: Error when create develop branch");
                                    })
                            })
                            .catch(_ => {
                                this.actionResultApplicationService.setActionResult(false, "Hotfix branch merge is not allowed: Error when rename develop branch");
                            })
                    } else {
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
    }
}