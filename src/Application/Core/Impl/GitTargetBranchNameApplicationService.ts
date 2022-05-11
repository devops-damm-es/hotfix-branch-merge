import { Inject } from "typescript-ioc";
import { IGitTargetBranchNameDomainService } from "../../../Domain/Services/Core/IGitTargetBranchNameDomainService";
import { IGitTargetBranchNameApplicationService } from "../IGitTargetBranchNameApplicationService";

export class GitTargetBranchNameApplicationService implements IGitTargetBranchNameApplicationService {

    private gitTargetBranchNameDomainService: IGitTargetBranchNameDomainService;

    constructor(@Inject gitTargetBranchNameDomainService: IGitTargetBranchNameDomainService) {
        this.gitTargetBranchNameDomainService = gitTargetBranchNameDomainService;
    }

    getGitTargetBranchName(): String {
        return this.gitTargetBranchNameDomainService.getRepositoryService().getGitTargetBranchName();
    }
}