import { IGitSourceBranchNameRepositoryService } from "../../../Infrastructure/Core/IGitSourceBranchNameRepositoryService";

export abstract class IGitSourceBranchNameDomainService {
    abstract getRepositoryService(): IGitSourceBranchNameRepositoryService;
}