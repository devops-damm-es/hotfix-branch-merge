import { GitPullRequestEventTypeEnum } from "../../../Enums/GitPullRequestEventTypeEnum";
import { IGitPullRequestEventBusinessRuleDomainService } from "../IGitPullRequestEventBusinessRuleDomainService";

export class GitPullRequestEventBusinessRuleDomainService implements IGitPullRequestEventBusinessRuleDomainService {
    isAllowedGitPullRequestEventType(gitPullRequestEventType: GitPullRequestEventTypeEnum): Boolean {
        return gitPullRequestEventType == GitPullRequestEventTypeEnum.Closed;
    }
}