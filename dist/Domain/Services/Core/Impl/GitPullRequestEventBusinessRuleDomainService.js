"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitPullRequestEventBusinessRuleDomainService = void 0;
const GitPullRequestEventTypeEnum_1 = require("../../../Enums/GitPullRequestEventTypeEnum");
class GitPullRequestEventBusinessRuleDomainService {
    isAllowedGitPullRequestEventType(gitPullRequestEventType) {
        return gitPullRequestEventType == GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.Closed;
    }
}
exports.GitPullRequestEventBusinessRuleDomainService = GitPullRequestEventBusinessRuleDomainService;
//# sourceMappingURL=GitPullRequestEventBusinessRuleDomainService.js.map