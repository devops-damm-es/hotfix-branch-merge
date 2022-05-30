import { Container } from "typescript-ioc";
import { IActionResultApplicationService } from "../../../src/Application/Core/IActionResultApplicationService";
import { IGitAuthenticationApplicationService } from "../../../src/Application/Core/IGitAuthenticationApplicationService";
import { IGitBranchApplicationService } from "../../../src/Application/Core/IGitBranchApplicationService";
import { IGitDefaultBranchNameApplicationService } from "../../../src/Application/Core/IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "../../../src/Application/Core/IGitEventApplicationService";
import { IGitPullRequestApplicationService } from "../../../src/Application/Core/IGitPullRequestApplicationService";
import { IGitPullRequestEventApplicationService } from "../../../src/Application/Core/IGitPullRequestEventApplicationService";
import { IGitRepositoryApplicationService } from "../../../src/Application/Core/IGitRepositoryApplicationService";
import { IGitSourceBranchNameApplicationService } from "../../../src/Application/Core/IGitSourceBranchNameApplicationService";
import { IGitTargetBranchNameApplicationService } from "../../../src/Application/Core/IGitTargetBranchNameApplicationService";
import { ActionResultApplicationService } from "../../../src/Application/Core/Impl/ActionResultApplicationService";
import { GitAuthenticationApplicationService } from "../../../src/Application/Core/Impl/GitAuthenticationApplicationService";
import { GitBranchApplicationService } from "../../../src/Application/Core/Impl/GitBranchApplicationService";
import { GitDefaultBranchNameApplicationService } from "../../../src/Application/Core/Impl/GitDefaultBranchNameApplicationService";
import { GitEventApplicationService } from "../../../src/Application/Core/Impl/GitEventApplicationService";
import { GitPullRequestApplicationService } from "../../../src/Application/Core/Impl/GitPullRequestApplicationService";
import { GitPullRequestEventApplicationService } from "../../../src/Application/Core/Impl/GitPullRequestEventApplicationService";
import { GitRepositoryApplicationService } from "../../../src/Application/Core/Impl/GitRepositoryApplicationService";
import { GitSourceBranchNameApplicationService } from "../../../src/Application/Core/Impl/GitSourceBranchNameApplicationService";
import { GitTargetBranchNameApplicationService } from "../../../src/Application/Core/Impl/GitTargetBranchNameApplicationService";
import { IMainApplicationService } from "../../../src/Application/IMainApplicationService";
import { MainApplicationService } from "../../../src/Application/Impl/MainApplicationService";
import { GitAuthentication } from "../../../src/Domain/Entities/GitAuthentication";
import { GitRepository } from "../../../src/Domain/Entities/GitRepository";
import { GitEventTypeEnum } from "../../../src/Domain/Enums/GitEventTypeEnum";
import { GitPullRequestEventTypeEnum } from "../../../src/Domain/Enums/GitPullRequestEventTypeEnum";
import { IActionResultDomainService } from "../../../src/Domain/Services/Core/IActionResultDomainService";
import { IGitAuthenticationDomainService } from "../../../src/Domain/Services/Core/IGitAuthenticationDomainService";
import { IGitBranchBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitBranchBusinessRuleDomainService";
import { IGitBranchDomainService } from "../../../src/Domain/Services/Core/IGitBranchDomainService";
import { IGitDefaultBranchNameDomainService } from "../../../src/Domain/Services/Core/IGitDefaultBranchNameDomainService";
import { IGitEventBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitEventBusinessRuleDomainService";
import { IGitEventDomainService } from "../../../src/Domain/Services/Core/IGitEventDomainService";
import { IGitPullRequestBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitPullRequestBusinessRuleDomainService";
import { IGitPullRequestDomainService } from "../../../src/Domain/Services/Core/IGitPullRequestDomainService";
import { IGitPullRequestEventBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitPullRequestEventBusinessRuleDomainService";
import { IGitPullRequestEventDomainService } from "../../../src/Domain/Services/Core/IGitPullRequestEventDomainService";
import { IGitRepositoryDomainService } from "../../../src/Domain/Services/Core/IGitRepositoryDomainService";
import { IGitSourceBranchNameDomainService } from "../../../src/Domain/Services/Core/IGitSourceBranchNameDomainService";
import { IGitTargetBranchNameDomainService } from "../../../src/Domain/Services/Core/IGitTargetBranchNameDomainService";
import { ActionResultDomainService } from "../../../src/Domain/Services/Core/Impl/ActionResultDomainService";
import { GitAuthenticationDomainService } from "../../../src/Domain/Services/Core/Impl/GitAuthenticationDomainService";
import { GitBranchBusinessRuleDomainService } from "../../../src/Domain/Services/Core/Impl/GitBranchBusinessRuleDomainService";
import { GitBranchDomainService } from "../../../src/Domain/Services/Core/Impl/GitBranchDomainService";
import { GitDefaultBranchNameDomainService } from "../../../src/Domain/Services/Core/Impl/GitDefaultBranchNameDomainService";
import { GitEventBusinessRuleDomainService } from "../../../src/Domain/Services/Core/Impl/GitEventBusinessRuleDomainService";
import { GitEventDomainService } from "../../../src/Domain/Services/Core/Impl/GitEventDomainService";
import { GitPullRequestBusinessRuleDomainService } from "../../../src/Domain/Services/Core/Impl/GitPullRequestBusinessRuleDomainService";
import { GitPullRequestDomainService } from "../../../src/Domain/Services/Core/Impl/GitPullRequestDomainService";
import { GitPullRequestEventBusinessRuleDomainService } from "../../../src/Domain/Services/Core/Impl/GitPullRequestEventBusinessRuleDomainService";
import { GitPullRequestEventDomainService } from "../../../src/Domain/Services/Core/Impl/GitPullRequestEventDomainService";
import { GitRepositoryDomainService } from "../../../src/Domain/Services/Core/Impl/GitRepositoryDomainService";
import { GitSourceBranchNameDomainService } from "../../../src/Domain/Services/Core/Impl/GitSourceBranchNameDomainService";
import { GitTargetBranchNameDomainService } from "../../../src/Domain/Services/Core/Impl/GitTargetBranchNameDomainService";
import { IActionResultRepositoryService } from "../../../src/Infrastructure/Core/IActionResultRepositoryService";
import { IGitAuthenticationRepositoryService } from "../../../src/Infrastructure/Core/IGitAuthenticationRepositoryService";
import { IGitBranchRepositoryService } from "../../../src/Infrastructure/Core/IGitBranchRepositoryService";
import { IGitDefaultBranchNameRepositoryService } from "../../../src/Infrastructure/Core/IGitDefaultBranchNameRepositoryService";
import { IGitEventRepositoryService } from "../../../src/Infrastructure/Core/IGitEventRepositoryService";
import { IGitPullRequestEventRepositoryService } from "../../../src/Infrastructure/Core/IGitPullRequestEventRepositoryService";
import { IGitPullRequestRepositoryService } from "../../../src/Infrastructure/Core/IGitPullRequestRepositoryService";
import { IGitRepositoryRepositoryService } from "../../../src/Infrastructure/Core/IGitRepositoryRepositoryService";
import { IGitSourceBranchNameRepositoryService } from "../../../src/Infrastructure/Core/IGitSourceBranchNameRepositoryService";
import { IGitTargetBranchNameRepositoryService } from "../../../src/Infrastructure/Core/IGitTargetBranchNameRepositoryService";
import { ActionResultRepositoryService } from "../../../src/Infrastructure/Core/Impl/ActionResultRepositoryService";
import { GitAuthenticationRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitAuthenticationRepositoryService";
import { GitBranchRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitBranchRepositoryService";
import { GitDefaultBranchNameRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitDefaultBranchNameRepositoryService";
import { GitEventRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitEventRepositoryService";
import { GitPullRequestEventRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitPullRequestEventRepositoryService";
import { GitPullRequestRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitPullRequestRepositoryService";
import { GitRepositoryRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitRepositoryRepositoryService";
import { GitSourceBranchNameRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitSourceBranchNameRepositoryService";
import { GitTargetBranchNameRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitTargetBranchNameRepositoryService";
import { IActionResultWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IActionResultWrapperRepositoryService";
import { IGitAuthenticationWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService";
import { IGitBranchWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService";
import { IGitDefaultBranchNameWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitDefaultBranchNameWrapperRepositoryService";
import { IGitEventWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitEventWrapperRepositoryService";
import { IGitPullRequestEventWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitPullRequestEventWrapperRepositoryService";
import { IGitPullRequestWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitPullRequestWrapperRepositoryService";
import { IGitRepositoryWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService";
import { IGitSourceBranchNameWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitSourceBranchNameWrapperRepositoryService";
import { IGitTargetBranchNameWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitTargetBranchNameWrapperRepositoryService";

beforeEach(() => {
    jest.clearAllMocks();
});

test("start_IsHotfixBranchMergeFalse_ActionResultOmit_Ok", async () => {
    // Arrange

    // Application
    Container.bind(IActionResultApplicationService).to(ActionResultApplicationService);
    Container.bind(IGitAuthenticationApplicationService).to(GitAuthenticationApplicationService);
    Container.bind(IGitBranchApplicationService).to(GitBranchApplicationService);
    Container.bind(IGitDefaultBranchNameApplicationService).to(GitDefaultBranchNameApplicationService);
    Container.bind(IGitEventApplicationService).to(GitEventApplicationService);
    Container.bind(IGitPullRequestApplicationService).to(GitPullRequestApplicationService);
    Container.bind(IGitPullRequestEventApplicationService).to(GitPullRequestEventApplicationService);
    Container.bind(IGitRepositoryApplicationService).to(GitRepositoryApplicationService);
    Container.bind(IGitSourceBranchNameApplicationService).to(GitSourceBranchNameApplicationService);
    Container.bind(IGitTargetBranchNameApplicationService).to(GitTargetBranchNameApplicationService);
    Container.bind(IMainApplicationService).to(MainApplicationService);

    // Domain
    Container.bind(IActionResultDomainService).to(ActionResultDomainService);
    Container.bind(IGitAuthenticationDomainService).to(GitAuthenticationDomainService);
    Container.bind(IGitBranchBusinessRuleDomainService).to(GitBranchBusinessRuleDomainService);
    Container.bind(IGitBranchDomainService).to(GitBranchDomainService);
    Container.bind(IGitDefaultBranchNameDomainService).to(GitDefaultBranchNameDomainService);
    Container.bind(IGitEventBusinessRuleDomainService).to(GitEventBusinessRuleDomainService);
    Container.bind(IGitEventDomainService).to(GitEventDomainService);
    Container.bind(IGitPullRequestBusinessRuleDomainService).to(GitPullRequestBusinessRuleDomainService);
    Container.bind(IGitPullRequestDomainService).to(GitPullRequestDomainService);
    Container.bind(IGitPullRequestEventBusinessRuleDomainService).to(GitPullRequestEventBusinessRuleDomainService);
    Container.bind(IGitPullRequestEventDomainService).to(GitPullRequestEventDomainService);
    Container.bind(IGitRepositoryDomainService).to(GitRepositoryDomainService);
    Container.bind(IGitSourceBranchNameDomainService).to(GitSourceBranchNameDomainService);
    Container.bind(IGitTargetBranchNameDomainService).to(GitTargetBranchNameDomainService);

    // Infrastructure
    Container.bind(IActionResultRepositoryService).to(ActionResultRepositoryService);
    Container.bind(IGitAuthenticationRepositoryService).to(GitAuthenticationRepositoryService);
    Container.bind(IGitBranchRepositoryService).to(GitBranchRepositoryService);
    Container.bind(IGitDefaultBranchNameRepositoryService).to(GitDefaultBranchNameRepositoryService);
    Container.bind(IGitEventRepositoryService).to(GitEventRepositoryService);
    Container.bind(IGitPullRequestEventRepositoryService).to(GitPullRequestEventRepositoryService);
    Container.bind(IGitPullRequestRepositoryService).to(GitPullRequestRepositoryService);
    Container.bind(IGitRepositoryRepositoryService).to(GitRepositoryRepositoryService);
    Container.bind(IGitSourceBranchNameRepositoryService).to(GitSourceBranchNameRepositoryService);
    Container.bind(IGitTargetBranchNameRepositoryService).to(GitTargetBranchNameRepositoryService);

    Container.bind(IActionResultWrapperRepositoryService).to(FakeActionResultWrapperRepositoryService);
    Container.bind(IGitAuthenticationWrapperRepositoryService).to(FakeGitAuthenticationWrapperRepositoryService);
    Container.bind(IGitBranchWrapperRepositoryService).to(FakeGitBranchWrapperRepositoryService);
    Container.bind(IGitDefaultBranchNameWrapperRepositoryService).to(FakeGitDefaultBranchNameWrapperRepositoryService);
    Container.bind(IGitEventWrapperRepositoryService).to(FakeGitEventWrapperRepositoryService);
    Container.bind(IGitPullRequestEventWrapperRepositoryService).to(FakeGitPullRequestEventWrapperRepositoryService);
    Container.bind(IGitPullRequestWrapperRepositoryService).to(FakeGitPullRequestWrapperRepositoryService);
    Container.bind(IGitRepositoryWrapperRepositoryService).to(FakeGitRepositoryWrapperRepositoryService);
    Container.bind(IGitSourceBranchNameWrapperRepositoryService).to(FakeGitSourceBranchNameWrapperRepositoryService);
    Container.bind(IGitTargetBranchNameWrapperRepositoryService).to(FakeGitTargetBranchNameWrapperRepositoryService);

    var sut = Container.get(IMainApplicationService);

    // Act
    await sut.start();
    await new Promise(process.nextTick);

    // Assert
    expect(FakeActionResultWrapperRepositoryService.OmitMessage).toBe("Omit Hotfix branch merge: Git pull request between source and target branches are not hotfix branch merge");
});

class FakeActionResultWrapperRepositoryService implements IActionResultWrapperRepositoryService {

    public static Success: Boolean;
    public static Message: String;
    public static OmitMessage: String;

    setActionResult(success: Boolean, message: String) {
        FakeActionResultWrapperRepositoryService.Success = success;
        FakeActionResultWrapperRepositoryService.Message = message;
    }

    omitActionResult(message: String) {
        FakeActionResultWrapperRepositoryService.OmitMessage = message;
    }
}

class FakeGitAuthenticationWrapperRepositoryService implements IGitAuthenticationWrapperRepositoryService {
    getGitAuthentication(): GitAuthentication {
        return new GitAuthentication("token");
    }
}

class FakeGitBranchWrapperRepositoryService implements IGitBranchWrapperRepositoryService {
    renameGitBranch(
        branchName: String,
        newBranchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<Boolean> {
        return new Promise<Boolean>(function (resolve, reject) {
            resolve(true);
        });
    }

    createGitBranch(
        branchName: String,
        sourceBranchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<Boolean> {
        return new Promise<Boolean>(function (resolve, reject) {
            resolve(true);
        });
    }
}

class FakeGitDefaultBranchNameWrapperRepositoryService implements IGitDefaultBranchNameWrapperRepositoryService {
    getGitDefaultBranchName(): String | null {
        return "main";
    }
}

class FakeGitEventWrapperRepositoryService implements IGitEventWrapperRepositoryService {
    getGitEventType(): GitEventTypeEnum | null {
        return GitEventTypeEnum.PullRequest;
    }
}

class FakeGitPullRequestEventWrapperRepositoryService implements IGitPullRequestEventWrapperRepositoryService {
    getGitPullRequestEventType(): GitPullRequestEventTypeEnum | null {
        return GitPullRequestEventTypeEnum.Closed;
    }
}

class FakeGitPullRequestWrapperRepositoryService implements IGitPullRequestWrapperRepositoryService {
    isPullRequestMerged(): Boolean | null {
        return true;
    }
}

class FakeGitRepositoryWrapperRepositoryService implements IGitRepositoryWrapperRepositoryService {
    getGitRepository(): GitRepository {
        return new GitRepository("owner", "name");
    }
}

class FakeGitSourceBranchNameWrapperRepositoryService implements IGitSourceBranchNameWrapperRepositoryService {
    getGitSourceBranchName(): String | null {
        return "feature/MyFeature";
    }
}

class FakeGitTargetBranchNameWrapperRepositoryService implements IGitTargetBranchNameWrapperRepositoryService {
    getGitTargetBranchName(): String | null {
        return "develop";
    }
}