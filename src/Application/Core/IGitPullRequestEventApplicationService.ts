import { GitPullRequestEventTypeEnum } from "../../Domain/Enums/GitPullRequestEventTypeEnum";

export abstract class IGitPullRequestEventApplicationService {
    abstract getGitPullRequestEventType(): GitPullRequestEventTypeEnum;
}