import { IGitPullRequestRepositoryService } from "../../../Infrastructure/Core/IGitPullRequestRepositoryService";

export abstract class IGitPullRequestDomainService {
    abstract getRepositoryService(): IGitPullRequestRepositoryService;
}