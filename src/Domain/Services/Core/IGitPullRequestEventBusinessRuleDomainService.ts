import { GitPullRequestEventTypeEnum } from "../../Enums/GitPullRequestEventTypeEnum";

export abstract class IGitPullRequestEventBusinessRuleDomainService {
    abstract isAllowedGitPullRequestEventType(gitPullRequestEventType: GitPullRequestEventTypeEnum): Boolean;
}