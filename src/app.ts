import { IGitBranchWrapperRepositoryService } from "./Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService";
import { IoCContainer } from "./Crosscutting/Container";
import { IGitAuthenticationWrapperRepositoryService } from "./Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService";
import { IGitRepositoryWrapperRepositoryService } from "./Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService";

var gitAuthenticationWrapperRepositoryService = IoCContainer.resolve(IGitAuthenticationWrapperRepositoryService);
var gitAuthentication = gitAuthenticationWrapperRepositoryService.getGitAuthentication();

var gitRepositoryWrapperRepositoryService = IoCContainer.resolve(IGitRepositoryWrapperRepositoryService);
var gitRepository = gitRepositoryWrapperRepositoryService.getGitRepository();

var gitBranchWrapperRepositoryService = IoCContainer.resolve(IGitBranchWrapperRepositoryService);
gitBranchWrapperRepositoryService.renameGitBranch(
    'develop',
    'rename',
    gitRepository,
    gitAuthentication)
    .then(_ => { 
        console.log("Renamed OK");
    })
    .catch(_ => { 
        console.log("Error when rename branch");
     })