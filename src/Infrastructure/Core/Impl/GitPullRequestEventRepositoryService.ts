import { Inject } from "typescript-ioc";
import { GitPullRequestEventTypeEnum } from "../../../Domain/Enums/GitPullRequestEventTypeEnum";
import { IGitPullRequestEventRepositoryService } from "../IGitPullRequestEventRepositoryService";
import { IGitPullRequestEventWrapperRepositoryService } from "../Wrapper/IGitPullRequestEventWrapperRepositoryService";

export class GitPullRequestEventRepositoryService implements IGitPullRequestEventRepositoryService {

    private gitPullRequestEventWrapperRepositoryService: IGitPullRequestEventWrapperRepositoryService;

    constructor(@Inject gitPullRequestEventWrapperRepositoryService: IGitPullRequestEventWrapperRepositoryService) {
        this.gitPullRequestEventWrapperRepositoryService = gitPullRequestEventWrapperRepositoryService;
    }

    getGitPullRequestEventType(): GitPullRequestEventTypeEnum {
        var gitPullRequestEventType = this.gitPullRequestEventWrapperRepositoryService.getGitPullRequestEventType();
        if (gitPullRequestEventType != null) {
            return gitPullRequestEventType;
        } else {
            throw new Error("Invalid git pull request event type");
        }
    }
}