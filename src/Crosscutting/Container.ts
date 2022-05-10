import { Container } from "typescript-ioc";
import { IGitAuthenticationApplicationService } from "../Application/Core/IGitAuthenticationApplicationService";
import { IGitBranchApplicationService } from "../Application/Core/IGitBranchApplicationService";
import { IGitDefaultBranchNameApplicationService } from "../Application/Core/IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "../Application/Core/IGitEventApplicationService";
import { IGitRepositoryApplicationService } from "../Application/Core/IGitRepositoryApplicationService";
import { GitAuthenticationApplicationService } from "../Application/Core/Impl/GitAuthenticationApplicationService";
import { GitBranchApplicationService } from "../Application/Core/Impl/GitBranchApplicationService";
import { GitDefaultBranchNameApplicationService } from "../Application/Core/Impl/GitDefaultBranchNameApplicationService";
import { GitEventApplicationService } from "../Application/Core/Impl/GitEventApplicationService";
import { GitRepositoryApplicationService } from "../Application/Core/Impl/GitRepositoryApplicationService";
import { IGitAuthenticationDomainService } from "../Domain/Services/Core/IGitAuthenticationDomainService";
import { IGitBranchDomainService } from "../Domain/Services/Core/IGitBranchDomainService";
import { IGitDefaultBranchNameDomainService } from "../Domain/Services/Core/IGitDefaultBranchNameDomainService";
import { IGitEventDomainService } from "../Domain/Services/Core/IGitEventDomainService";
import { IGitRepositoryDomainService } from "../Domain/Services/Core/IGitRepositoryDomainService";
import { GitAuthenticationDomainService } from "../Domain/Services/Core/Impl/GitAuthenticationDomainService";
import { GitBranchDomainService } from "../Domain/Services/Core/Impl/GitBranchDomainService";
import { GitDefaultBranchNameDomainService } from "../Domain/Services/Core/Impl/GitDefaultBranchNameDomainService";
import { GitEventDomainService } from "../Domain/Services/Core/Impl/GitEventDomainService";
import { GitRepositoryDomainService } from "../Domain/Services/Core/Impl/GitRepositoryDomainService";
import { IGitAuthenticationRepositoryService } from "../Infrastructure/Core/IGitAuthenticationRepositoryService";
import { IGitBranchRepositoryService } from "../Infrastructure/Core/IGitBranchRepositoryService";
import { IGitDefaultBranchNameRepositoryService } from "../Infrastructure/Core/IGitDefaultBranchNameRepositoryService";
import { IGitEventRepositoryService } from "../Infrastructure/Core/IGitEventRepositoryService";
import { IGitRepositoryRepositoryService } from "../Infrastructure/Core/IGitRepositoryRepositoryService";
import { GitAuthenticationRepositoryService } from "../Infrastructure/Core/Impl/GitAuthenticationRepositoryService";
import { GitBranchRepositoryService } from "../Infrastructure/Core/Impl/GitBranchRepositoryService";
import { GitDefaultBranchNameRepositoryService } from "../Infrastructure/Core/Impl/GitDefaultBranchNameRepositoryService";
import { GitEventRepositoryService } from "../Infrastructure/Core/Impl/GitEventRepositoryService";
import { GitRepositoryRepositoryService } from "../Infrastructure/Core/Impl/GitRepositoryRepositoryService";
import { IGitAuthenticationWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService";
import { IGitBranchWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService";
import { IGitDefaultBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitDefaultBranchNameWrapperRepositoryService";
import { IGitEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitEventWrapperRepositoryService";
import { IGitRepositoryWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService";
import { GitAuthenticationWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitAuthenticationWrapperRepositoryService";
import { GitBranchWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitBranchWrapperRepositoryService";
import { GitDefaultBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitDefaultBranchNameWrapperRepositoryService";
import { GitEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitEventWrapperRepositoryService";
import { GitRepositoryWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitRepositoryWrapperRepositoryService";

export class IoCContainer {
    private static isLoaded: boolean;

    private static loadContainer() {

        // Application
        Container.bind(IGitAuthenticationApplicationService).to(GitAuthenticationApplicationService);
        Container.bind(IGitBranchApplicationService).to(GitBranchApplicationService);
        Container.bind(IGitDefaultBranchNameApplicationService).to(GitDefaultBranchNameApplicationService);
        Container.bind(IGitEventApplicationService).to(GitEventApplicationService);
        Container.bind(IGitRepositoryApplicationService).to(GitRepositoryApplicationService);

        // Domain
        Container.bind(IGitAuthenticationDomainService).to(GitAuthenticationDomainService);
        Container.bind(IGitBranchDomainService).to(GitBranchDomainService);
        Container.bind(IGitDefaultBranchNameDomainService).to(GitDefaultBranchNameDomainService);
        Container.bind(IGitEventDomainService).to(GitEventDomainService);
        Container.bind(IGitRepositoryDomainService).to(GitRepositoryDomainService);

        // Infrastructure
        Container.bind(IGitAuthenticationRepositoryService).to(GitAuthenticationRepositoryService);
        Container.bind(IGitBranchRepositoryService).to(GitBranchRepositoryService);
        Container.bind(IGitDefaultBranchNameRepositoryService).to(GitDefaultBranchNameRepositoryService);
        Container.bind(IGitEventRepositoryService).to(GitEventRepositoryService);
        Container.bind(IGitRepositoryRepositoryService).to(GitRepositoryRepositoryService);

        Container.bind(IGitAuthenticationWrapperRepositoryService).to(GitAuthenticationWrapperRepositoryService);
        Container.bind(IGitBranchWrapperRepositoryService).to(GitBranchWrapperRepositoryService);
        Container.bind(IGitDefaultBranchNameWrapperRepositoryService).to(GitDefaultBranchNameWrapperRepositoryService);
        Container.bind(IGitEventWrapperRepositoryService).to(GitEventWrapperRepositoryService);
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

