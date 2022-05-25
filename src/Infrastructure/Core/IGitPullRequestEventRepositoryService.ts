import { GitPullRequestEventTypeEnum } from "../../Domain/Enums/GitPullRequestEventTypeEnum";

export abstract class IGitPullRequestEventRepositoryService {
    abstract getGitPullRequestEventType(): GitPullRequestEventTypeEnum;
}