import { GitPullRequestEventTypeEnum } from "../../../Domain/Enums/GitPullRequestEventTypeEnum";

export abstract class IGitPullRequestEventWrapperRepositoryService {
    abstract getGitPullRequestEventType(): GitPullRequestEventTypeEnum | null;
}