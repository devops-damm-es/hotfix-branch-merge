import { IGitBranchWrapperRepositoryService } from "./Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService";
import { IoCContainer } from "./Crosscutting/Container";

var gitBranchWrapperRepositoryService = IoCContainer.resolve(IGitBranchWrapperRepositoryService);
/*gitBranchWrapperRepositoryService.renameGitBranch(
    branchName: String,
    newBranchName: String,
    gitRepository: GitRepository,
    gitAuthentication: GitAuthentication);
*/

var a = 1;
console.log("Test");