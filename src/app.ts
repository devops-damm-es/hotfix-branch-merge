import { IGitBranchWrapperRepositoryService } from "./Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService";
import { IoCContainer } from "./Crosscutting/Container";
import { IGitAuthenticationWrapperRepositoryService } from "./Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService";
import { IGitRepositoryWrapperRepositoryService } from "./Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService";
import { IGitDefaultBranchNameWrapperRepositoryService } from "./Infrastructure/Core/Wrapper/IGitDefaultBranchNameWrapperRepositoryService";

var gitAuthenticationWrapperRepositoryService = IoCContainer.resolve(IGitAuthenticationWrapperRepositoryService);
var gitAuthentication = gitAuthenticationWrapperRepositoryService.getGitAuthentication();

var gitRepositoryWrapperRepositoryService = IoCContainer.resolve(IGitRepositoryWrapperRepositoryService);
var gitRepository = gitRepositoryWrapperRepositoryService.getGitRepository();

var gitBranchWrapperRepositoryService = IoCContainer.resolve(IGitBranchWrapperRepositoryService);
gitBranchWrapperRepositoryService.renameGitBranch(
    'develop',
    'feature/new_feature',
    gitRepository,
    gitAuthentication)
    .then(_ => {
        console.log("Renamed OK");
        var gitDefaultBranchNameWrapperRepositoryService = IoCContainer.resolve(IGitDefaultBranchNameWrapperRepositoryService);
        var gitDefaultBranchName = gitDefaultBranchNameWrapperRepositoryService.getGitDefaultBranchName();

        gitBranchWrapperRepositoryService.createGitBranch(
            'develop',
            gitDefaultBranchName,
            gitRepository,
            gitAuthentication)
            .then(_ => {
                console.log("Create develop from main OK");
            })
            .catch(_ => {
                console.log("Error when create develop from main");
            })
    })
    .catch(_ => {
        console.log("Error when rename branch");
    })