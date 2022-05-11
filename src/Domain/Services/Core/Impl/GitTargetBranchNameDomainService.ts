import { Inject } from "typescript-ioc";
import { IGitTargetBranchNameRepositoryService } from "../../../../Infrastructure/Core/IGitTargetBranchNameRepositoryService";
import { IGitTargetBranchNameDomainService } from "../IGitTargetBranchNameDomainService";

export class GitTargetBranchNameDomainService implements IGitTargetBranchNameDomainService {

    private gitTargetBranchNameRepositoryService: IGitTargetBranchNameRepositoryService;

    constructor(@Inject gitTargetBranchNameRepositoryService: IGitTargetBranchNameRepositoryService) {
        this.gitTargetBranchNameRepositoryService = gitTargetBranchNameRepositoryService;
    }

    getRepositoryService(): IGitTargetBranchNameRepositoryService {
        return this.gitTargetBranchNameRepositoryService;
    }
}