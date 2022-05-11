import { Inject } from "typescript-ioc";
import { IGitTargetBranchNameRepositoryService } from "../IGitTargetBranchNameRepositoryService";
import { IGitTargetBranchNameWrapperRepositoryService } from "../Wrapper/IGitTargetBranchNameWrapperRepositoryService";

export class GitTargetBranchNameRepositoryService implements IGitTargetBranchNameRepositoryService {

    private gitTargetBranchNameWrapperRepositoryService: IGitTargetBranchNameWrapperRepositoryService;

    constructor(@Inject gitTargetBranchNameWrapperRepositoryService: IGitTargetBranchNameWrapperRepositoryService) {
        this.gitTargetBranchNameWrapperRepositoryService = gitTargetBranchNameWrapperRepositoryService;
    }

    getGitTargetBranchName(): String {
        var gitTargetBranchName = this.gitTargetBranchNameWrapperRepositoryService.getGitTargetBranchName();
        if (gitTargetBranchName != null) {
            return gitTargetBranchName;
        } else {
            throw new Error("Invalid git target branch name");
        }
    }
}