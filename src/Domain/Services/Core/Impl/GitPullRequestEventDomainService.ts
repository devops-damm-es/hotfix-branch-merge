import { Inject } from "typescript-ioc";
import { IGitPullRequestEventRepositoryService } from "../../../../Infrastructure/Core/IGitPullRequestEventRepositoryService";
import { IGitPullRequestEventDomainService } from "../IGitPullRequestEventDomainService";

export class GitPullRequestEventDomainService implements IGitPullRequestEventDomainService {

    private gitPullRequestEventRepositoryService: IGitPullRequestEventRepositoryService;

    constructor(@Inject gitPullRequestEventRepositoryService: IGitPullRequestEventRepositoryService) {
        this.gitPullRequestEventRepositoryService = gitPullRequestEventRepositoryService;
    }

    getRepositoryService(): IGitPullRequestEventRepositoryService {
        return this.gitPullRequestEventRepositoryService;
    }
}