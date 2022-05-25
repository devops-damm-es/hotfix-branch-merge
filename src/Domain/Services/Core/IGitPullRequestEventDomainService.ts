import { IGitPullRequestEventRepositoryService } from "../../../Infrastructure/Core/IGitPullRequestEventRepositoryService";

export abstract class IGitPullRequestEventDomainService {
    abstract getRepositoryService(): IGitPullRequestEventRepositoryService;
}