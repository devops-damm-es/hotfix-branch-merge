import { Inject } from "typescript-ioc";
import { IGitPullRequestRepositoryService } from "../../../../Infrastructure/Core/IGitPullRequestRepositoryService";
import { IGitPullRequestDomainService } from "../IGitPullRequestDomainService";

export class GitPullRequestDomainService implements IGitPullRequestDomainService {

    private gitPullRequestRepositoryService: IGitPullRequestRepositoryService;

    constructor(@Inject gitPullRequestRepositoryService: IGitPullRequestRepositoryService) {
        this.gitPullRequestRepositoryService = gitPullRequestRepositoryService;
    }

    getRepositoryService(): IGitPullRequestRepositoryService {
        return this.gitPullRequestRepositoryService;
    }
}