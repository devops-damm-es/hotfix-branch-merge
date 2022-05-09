import { Container } from "typescript-ioc";
import { IGitAuthenticationWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService";
import { IGitBranchWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService";
import { IGitRepositoryWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService";
import { GitAuthenticationWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitAuthenticationWrapperRepositoryService";
import { GitBranchWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitBranchWrapperRepositoryService";
import { GitRepositoryWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitRepositoryWrapperRepositoryService";

export class IoCContainer {
    private static isLoaded: boolean;

    private static loadContainer() {

        // Application

        // Domain

        // Infrastructure

        Container.bind(IGitAuthenticationWrapperRepositoryService).to(GitAuthenticationWrapperRepositoryService);
        Container.bind(IGitBranchWrapperRepositoryService).to(GitBranchWrapperRepositoryService);
        Container.bind(IGitRepositoryWrapperRepositoryService).to(GitRepositoryWrapperRepositoryService);
    }

    static resolve(arg: any): any {
        if (IoCContainer.isLoaded != true) {
            IoCContainer.loadContainer();
            IoCContainer.isLoaded = true;
        }
        return Container.get(arg);
    }
}

