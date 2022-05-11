import { IGitTargetBranchNameRepositoryService } from "../../../Infrastructure/Core/IGitTargetBranchNameRepositoryService";

export abstract class IGitTargetBranchNameDomainService {
    abstract getRepositoryService(): IGitTargetBranchNameRepositoryService;
}