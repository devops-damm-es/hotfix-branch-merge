import { Inject } from "typescript-ioc";
import { IGitPullRequestRepositoryService } from "../IGitPullRequestRepositoryService";
import { IGitPullRequestWrapperRepositoryService } from "../Wrapper/IGitPullRequestWrapperRepositoryService";

export class GitPullRequestRepositoryService implements IGitPullRequestRepositoryService {

    private gitPullRequestWrapperRepositoryService: IGitPullRequestWrapperRepositoryService;

    constructor(@Inject gitPullRequestWrapperRepositoryService: IGitPullRequestWrapperRepositoryService) {
        this.gitPullRequestWrapperRepositoryService = gitPullRequestWrapperRepositoryService;
    }

    isPullRequestMerged(): Boolean {
        var isPullRequestMerged = this.gitPullRequestWrapperRepositoryService.isPullRequestMerged();
        if (isPullRequestMerged != null) {
            return isPullRequestMerged;
        } else {
            throw new Error("Invalid is Pull Request Merged");
        }
    }
}