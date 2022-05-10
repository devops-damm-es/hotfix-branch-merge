import { GitAuthentication } from "../../Domain/Entities/GitAuthentication";
import { GitRepository } from "../../Domain/Entities/GitRepository";

export abstract class IGitBranchApplicationService {
    abstract renameGitBranch(
        branchName: String,
        newBranchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<Boolean>;

    abstract createGitBranch(
        branchName: String,
        sourceBranchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<Boolean>;
}