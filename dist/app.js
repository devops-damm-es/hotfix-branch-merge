"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IGitBranchWrapperRepositoryService_1 = require("./Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService");
const Container_1 = require("./Crosscutting/Container");
const IGitAuthenticationWrapperRepositoryService_1 = require("./Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService");
const IGitRepositoryWrapperRepositoryService_1 = require("./Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService");
const IGitDefaultBranchNameWrapperRepositoryService_1 = require("./Infrastructure/Core/Wrapper/IGitDefaultBranchNameWrapperRepositoryService");
var gitAuthenticationWrapperRepositoryService = Container_1.IoCContainer.resolve(IGitAuthenticationWrapperRepositoryService_1.IGitAuthenticationWrapperRepositoryService);
var gitAuthentication = gitAuthenticationWrapperRepositoryService.getGitAuthentication();
var gitRepositoryWrapperRepositoryService = Container_1.IoCContainer.resolve(IGitRepositoryWrapperRepositoryService_1.IGitRepositoryWrapperRepositoryService);
var gitRepository = gitRepositoryWrapperRepositoryService.getGitRepository();
var gitBranchWrapperRepositoryService = Container_1.IoCContainer.resolve(IGitBranchWrapperRepositoryService_1.IGitBranchWrapperRepositoryService);
gitBranchWrapperRepositoryService.renameGitBranch('develop', 'feature/new_feature', gitRepository, gitAuthentication)
    .then(_ => {
    console.log("Renamed OK");
    var gitDefaultBranchNameWrapperRepositoryService = Container_1.IoCContainer.resolve(IGitDefaultBranchNameWrapperRepositoryService_1.IGitDefaultBranchNameWrapperRepositoryService);
    var gitDefaultBranchName = gitDefaultBranchNameWrapperRepositoryService.getGitDefaultBranchName();
    gitBranchWrapperRepositoryService.createGitBranch('develop', gitDefaultBranchName, gitRepository, gitAuthentication)
        .then(_ => {
        console.log("Create develop from main OK");
    })
        .catch(_ => {
        console.log("Error when create develop from main");
    });
})
    .catch(_ => {
    console.log("Error when rename branch");
});
//# sourceMappingURL=app.js.map