import { Inject } from "typescript-ioc";
import { IGitSourceBranchNameRepositoryService } from "../../../../Infrastructure/Core/IGitSourceBranchNameRepositoryService";
import { IGitSourceBranchNameDomainService } from "../IGitSourceBranchNameDomainService";

export class GitSourceBranchNameDomainService implements IGitSourceBranchNameDomainService {

    private gitSourceBranchNameRepositoryService: IGitSourceBranchNameRepositoryService;

    constructor(@Inject gitSourceBranchNameRepositoryService: IGitSourceBranchNameRepositoryService) {
        this.gitSourceBranchNameRepositoryService = gitSourceBranchNameRepositoryService;
    }

    getRepositoryService(): IGitSourceBranchNameRepositoryService {
        return this.gitSourceBranchNameRepositoryService;
    }
}