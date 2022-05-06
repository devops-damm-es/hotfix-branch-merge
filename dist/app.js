"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IGitBranchWrapperRepositoryService_1 = require("./Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService");
const Container_1 = require("./Crosscutting/Container");
var gitBranchWrapperRepositoryService = Container_1.IoCContainer.resolve(IGitBranchWrapperRepositoryService_1.IGitBranchWrapperRepositoryService);
/*gitBranchWrapperRepositoryService.renameGitBranch(
    branchName: String,
    newBranchName: String,
    gitRepository: GitRepository,
    gitAuthentication: GitAuthentication);
*/
var a = 1;
console.log("Test");
//# sourceMappingURL=app.js.map