import { Inject } from "typescript-ioc";
import { IGitSourceBranchNameDomainService } from "../../../Domain/Services/Core/IGitSourceBranchNameDomainService";
import { IGitSourceBranchNameApplicationService } from "../IGitSourceBranchNameApplicationService";

export class GitSourceBranchNameApplicationService implements IGitSourceBranchNameApplicationService {

    private gitSourceBranchNameDomainService: IGitSourceBranchNameDomainService;

    constructor(@Inject gitSourceBranchNameDomainService: IGitSourceBranchNameDomainService) {
        this.gitSourceBranchNameDomainService = gitSourceBranchNameDomainService;
    }

    getGitSourceBranchName(): String {
        return this.gitSourceBranchNameDomainService.getRepositoryService().getGitSourceBranchName();
    }
}