"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IGitBranchWrapperRepositoryService_1 = require("./Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService");
const Container_1 = require("./Crosscutting/Container");
const IGitAuthenticationWrapperRepositoryService_1 = require("./Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService");
const IGitRepositoryWrapperRepositoryService_1 = require("./Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService");
var gitAuthenticationWrapperRepositoryService = Container_1.IoCContainer.resolve(IGitAuthenticationWrapperRepositoryService_1.IGitAuthenticationWrapperRepositoryService);
var gitAuthentication = gitAuthenticationWrapperRepositoryService.getGitAuthentication();
var gitRepositoryWrapperRepositoryService = Container_1.IoCContainer.resolve(IGitRepositoryWrapperRepositoryService_1.IGitRepositoryWrapperRepositoryService);
var gitRepository = gitRepositoryWrapperRepositoryService.getGitRepository();
var gitBranchWrapperRepositoryService = Container_1.IoCContainer.resolve(IGitBranchWrapperRepositoryService_1.IGitBranchWrapperRepositoryService);
gitBranchWrapperRepositoryService.renameGitBranch('develop', 'rename', gitRepository, gitAuthentication)
    .then(_ => {
    console.log("Renamed OK");
})
    .catch(_ => {
    console.log("Error when rename branch");
});
//# sourceMappingURL=app.js.map