import { Inject } from "typescript-ioc";
import { IGitSourceBranchNameRepositoryService } from "../IGitSourceBranchNameRepositoryService";
import { IGitSourceBranchNameWrapperRepositoryService } from "../Wrapper/IGitSourceBranchNameWrapperRepositoryService";

export class GitSourceBranchNameRepositoryService implements IGitSourceBranchNameRepositoryService {

    private gitSourceBranchNameWrapperRepositoryService: IGitSourceBranchNameWrapperRepositoryService;

    constructor(@Inject gitSourceBranchNameWrapperRepositoryService: IGitSourceBranchNameWrapperRepositoryService) {
        this.gitSourceBranchNameWrapperRepositoryService = gitSourceBranchNameWrapperRepositoryService;
    }

    getGitSourceBranchName(): String {
        var gitSourceBranchName = this.gitSourceBranchNameWrapperRepositoryService.getGitSourceBranchName();
        if (gitSourceBranchName != null) {
            return gitSourceBranchName;
        } else {
            throw new Error("Invalid git source branch name");
        }
    }
}