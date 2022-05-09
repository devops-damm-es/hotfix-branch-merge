"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoCContainer = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const IGitAuthenticationWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService");
const IGitBranchWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService");
const IGitDefaultBranchNameWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitDefaultBranchNameWrapperRepositoryService");
const IGitRepositoryWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService");
const GitAuthenticationWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitAuthenticationWrapperRepositoryService");
const GitBranchWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitBranchWrapperRepositoryService");
const GitDefaultBranchNameWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitDefaultBranchNameWrapperRepositoryService");
const GitRepositoryWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitRepositoryWrapperRepositoryService");
class IoCContainer {
    static loadContainer() {
        // Application
        // Domain
        // Infrastructure
        typescript_ioc_1.Container.bind(IGitAuthenticationWrapperRepositoryService_1.IGitAuthenticationWrapperRepositoryService).to(GitAuthenticationWrapperRepositoryService_1.GitAuthenticationWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitBranchWrapperRepositoryService_1.IGitBranchWrapperRepositoryService).to(GitBranchWrapperRepositoryService_1.GitBranchWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitDefaultBranchNameWrapperRepositoryService_1.IGitDefaultBranchNameWrapperRepositoryService).to(GitDefaultBranchNameWrapperRepositoryService_1.GitDefaultBranchNameWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitRepositoryWrapperRepositoryService_1.IGitRepositoryWrapperRepositoryService).to(GitRepositoryWrapperRepositoryService_1.GitRepositoryWrapperRepositoryService);
    }
    static resolve(arg) {
        if (IoCContainer.isLoaded != true) {
            IoCContainer.loadContainer();
            IoCContainer.isLoaded = true;
        }
        return typescript_ioc_1.Container.get(arg);
    }
}
exports.IoCContainer = IoCContainer;
//# sourceMappingURL=Container.js.map