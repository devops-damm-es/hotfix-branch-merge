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
import { MainApplicationService } from "../../../src/Application/Impl/MainApplicationService";
import { GitAuthentication } from "../../../src/Domain/Entities/GitAuthentication";
import { GitRepository } from "../../../src/Domain/Entities/GitRepository";
import { GitEventTypeEnum } from "../../../src/Domain/Enums/GitEventTypeEnum";
import { GitPullRequestEventTypeEnum } from "../../../src/Domain/Enums/GitPullRequestEventTypeEnum";
import { IGitBranchBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitBranchBusinessRuleDomainService";
import { IGitEventBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitEventBusinessRuleDomainService";
import { IGitPullRequestBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitPullRequestBusinessRuleDomainService";
import { IGitPullRequestEventBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitPullRequestEventBusinessRuleDomainService";

beforeEach(() => {
    jest.clearAllMocks();
});

test("start_IsPullRequestMergedTrue_ActionResultTrue_Ok", async () => {
    // Arrange
    let sut = new MainApplicationService(
        mockGitEventApplicationService,
        mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService,
        mockGitPullRequestEventApplicationService,
        mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService,
        mockGitDefaultBranchNameApplicationService,
        mockGitSourceBranchNameApplicationService,
        mockGitTargetBranchNameApplicationService,
        mockGitPullRequestBusinessRuleIsHotfixBranchMergeTrueDomainService,
        mockGitPullRequestIsPullRequestMergedTrueApplicationService,
        mockGitBranchBusinessRuleDomainService,
        mockGitAuthenticationApplicationService,
        mockGitRepositoryApplicationService,
        mockGitBranchApplicationService,
        mockActionResultApplicationService);

    // Act
    await sut.start();
    await new Promise(process.nextTick);

    // Assert
    expect(mockGitEventApplicationService.getGitEventType).toBeCalledTimes(1);
    expect(mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService.isAllowedGitEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventApplicationService.getGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService.isAllowedGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(1);
    expect(mockGitSourceBranchNameApplicationService.getGitSourceBranchName).toBeCalledTimes(1);
    expect(mockGitTargetBranchNameApplicationService.getGitTargetBranchName).toBeCalledTimes(1);
    expect(mockGitPullRequestBusinessRuleIsHotfixBranchMergeTrueDomainService.isHotfixBranchMerge).toBeCalledTimes(1);
    expect(mockGitPullRequestIsPullRequestMergedTrueApplicationService.isPullRequestMerged).toBeCalledTimes(1);
    expect(mockGitBranchBusinessRuleDomainService.getFeatureBranchNameFromHotfixBranchName).toBeCalledTimes(1);
    expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(1);
    expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(1);
    expect(mockGitBranchApplicationService.renameGitBranch).toBeCalledTimes(1);
    expect(mockGitBranchApplicationService.createGitBranch).toBeCalledTimes(1);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_IsAllowedGitEventTypeFalse_ActionResultFalse_Ok", async () => {
    // Arrange
    let sut = new MainApplicationService(
        mockGitEventApplicationService,
        mockGitEventBusinessRuleIsAllowedGitEventTypeFalseDomainService,
        mockGitPullRequestEventApplicationService,
        mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService,
        mockGitDefaultBranchNameApplicationService,
        mockGitSourceBranchNameApplicationService,
        mockGitTargetBranchNameApplicationService,
        mockGitPullRequestBusinessRuleIsHotfixBranchMergeTrueDomainService,
        mockGitPullRequestIsPullRequestMergedTrueApplicationService,
        mockGitBranchBusinessRuleDomainService,
        mockGitAuthenticationApplicationService,
        mockGitRepositoryApplicationService,
        mockGitBranchApplicationService,
        mockActionResultApplicationService);

    // Act
    await sut.start();
    await new Promise(process.nextTick);

    // Assert
    expect(mockGitEventApplicationService.getGitEventType).toBeCalledTimes(1);
    expect(mockGitEventBusinessRuleIsAllowedGitEventTypeFalseDomainService.isAllowedGitEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventApplicationService.getGitPullRequestEventType).toBeCalledTimes(0);
    expect(mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService.isAllowedGitPullRequestEventType).toBeCalledTimes(0);
    expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(0);
    expect(mockGitSourceBranchNameApplicationService.getGitSourceBranchName).toBeCalledTimes(0);
    expect(mockGitTargetBranchNameApplicationService.getGitTargetBranchName).toBeCalledTimes(0);
    expect(mockGitPullRequestBusinessRuleIsHotfixBranchMergeTrueDomainService.isHotfixBranchMerge).toBeCalledTimes(0);
    expect(mockGitPullRequestIsPullRequestMergedTrueApplicationService.isPullRequestMerged).toBeCalledTimes(0);
    expect(mockGitBranchBusinessRuleDomainService.getFeatureBranchNameFromHotfixBranchName).toBeCalledTimes(0);
    expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(0);
    expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(0);
    expect(mockGitBranchApplicationService.renameGitBranch).toBeCalledTimes(0);
    expect(mockGitBranchApplicationService.createGitBranch).toBeCalledTimes(0);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_IsAllowedGitPullRequestEventTypeFalse_ActionResultFalse_Ok", async () => {
    // Arrange
    let sut = new MainApplicationService(
        mockGitEventApplicationService,
        mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService,
        mockGitPullRequestEventApplicationService,
        mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeFalseDomainService,
        mockGitDefaultBranchNameApplicationService,
        mockGitSourceBranchNameApplicationService,
        mockGitTargetBranchNameApplicationService,
        mockGitPullRequestBusinessRuleIsHotfixBranchMergeTrueDomainService,
        mockGitPullRequestIsPullRequestMergedTrueApplicationService,
        mockGitBranchBusinessRuleDomainService,
        mockGitAuthenticationApplicationService,
        mockGitRepositoryApplicationService,
        mockGitBranchApplicationService,
        mockActionResultApplicationService);

    // Act
    await sut.start();
    await new Promise(process.nextTick);

    // Assert
    expect(mockGitEventApplicationService.getGitEventType).toBeCalledTimes(1);
    expect(mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService.isAllowedGitEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventApplicationService.getGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeFalseDomainService.isAllowedGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(0);
    expect(mockGitSourceBranchNameApplicationService.getGitSourceBranchName).toBeCalledTimes(0);
    expect(mockGitTargetBranchNameApplicationService.getGitTargetBranchName).toBeCalledTimes(0);
    expect(mockGitPullRequestBusinessRuleIsHotfixBranchMergeTrueDomainService.isHotfixBranchMerge).toBeCalledTimes(0);
    expect(mockGitPullRequestIsPullRequestMergedTrueApplicationService.isPullRequestMerged).toBeCalledTimes(0);
    expect(mockGitBranchBusinessRuleDomainService.getFeatureBranchNameFromHotfixBranchName).toBeCalledTimes(0);
    expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(0);
    expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(0);
    expect(mockGitBranchApplicationService.renameGitBranch).toBeCalledTimes(0);
    expect(mockGitBranchApplicationService.createGitBranch).toBeCalledTimes(0);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_IsHotfixBranchMergeFalse_ActionResultOmit_Ok", async () => {
    // Arrange
    let sut = new MainApplicationService(
        mockGitEventApplicationService,
        mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService,
        mockGitPullRequestEventApplicationService,
        mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService,
        mockGitDefaultBranchNameApplicationService,
        mockGitSourceBranchNameApplicationService,
        mockGitTargetBranchNameApplicationService,
        mockGitPullRequestBusinessRuleIsHotfixBranchMergeFalseDomainService,
        mockGitPullRequestIsPullRequestMergedTrueApplicationService,
        mockGitBranchBusinessRuleDomainService,
        mockGitAuthenticationApplicationService,
        mockGitRepositoryApplicationService,
        mockGitBranchApplicationService,
        mockActionResultApplicationService);

    // Act
    await sut.start();
    await new Promise(process.nextTick);

    // Assert
    expect(mockGitEventApplicationService.getGitEventType).toBeCalledTimes(1);
    expect(mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService.isAllowedGitEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventApplicationService.getGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService.isAllowedGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(1);
    expect(mockGitSourceBranchNameApplicationService.getGitSourceBranchName).toBeCalledTimes(1);
    expect(mockGitTargetBranchNameApplicationService.getGitTargetBranchName).toBeCalledTimes(1);
    expect(mockGitPullRequestBusinessRuleIsHotfixBranchMergeFalseDomainService.isHotfixBranchMerge).toBeCalledTimes(1);
    expect(mockGitPullRequestIsPullRequestMergedTrueApplicationService.isPullRequestMerged).toBeCalledTimes(0);
    expect(mockGitBranchBusinessRuleDomainService.getFeatureBranchNameFromHotfixBranchName).toBeCalledTimes(0);
    expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(0);
    expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(0);
    expect(mockGitBranchApplicationService.renameGitBranch).toBeCalledTimes(0);
    expect(mockGitBranchApplicationService.createGitBranch).toBeCalledTimes(0);
    expect(mockActionResultApplicationService.omitActionResult).toBeCalledTimes(1);
});

test("start_IsPullRequestMergedFalse_ActionResultOmit_Ok", async () => {
    // Arrange
    let sut = new MainApplicationService(
        mockGitEventApplicationService,
        mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService,
        mockGitPullRequestEventApplicationService,
        mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService,
        mockGitDefaultBranchNameApplicationService,
        mockGitSourceBranchNameApplicationService,
        mockGitTargetBranchNameApplicationService,
        mockGitPullRequestBusinessRuleIsHotfixBranchMergeTrueDomainService,
        mockGitPullRequestIsPullRequestMergedFalseApplicationService,
        mockGitBranchBusinessRuleDomainService,
        mockGitAuthenticationApplicationService,
        mockGitRepositoryApplicationService,
        mockGitBranchApplicationService,
        mockActionResultApplicationService);

    // Act
    await sut.start();
    await new Promise(process.nextTick);

    // Assert
    expect(mockGitEventApplicationService.getGitEventType).toBeCalledTimes(1);
    expect(mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService.isAllowedGitEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventApplicationService.getGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService.isAllowedGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(1);
    expect(mockGitSourceBranchNameApplicationService.getGitSourceBranchName).toBeCalledTimes(1);
    expect(mockGitTargetBranchNameApplicationService.getGitTargetBranchName).toBeCalledTimes(1);
    expect(mockGitPullRequestBusinessRuleIsHotfixBranchMergeTrueDomainService.isHotfixBranchMerge).toBeCalledTimes(1);
    expect(mockGitPullRequestIsPullRequestMergedFalseApplicationService.isPullRequestMerged).toBeCalledTimes(1);
    expect(mockGitBranchBusinessRuleDomainService.getFeatureBranchNameFromHotfixBranchName).toBeCalledTimes(0);
    expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(0);
    expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(0);
    expect(mockGitBranchApplicationService.renameGitBranch).toBeCalledTimes(0);
    expect(mockGitBranchApplicationService.createGitBranch).toBeCalledTimes(0);
    expect(mockActionResultApplicationService.omitActionResult).toBeCalledTimes(1);
});

test("start_RenameGitBranchReject_ActionResultFalse_Ok", async () => {
    // Arrange
    let sut = new MainApplicationService(
        mockGitEventApplicationService,
        mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService,
        mockGitPullRequestEventApplicationService,
        mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService,
        mockGitDefaultBranchNameApplicationService,
        mockGitSourceBranchNameApplicationService,
        mockGitTargetBranchNameApplicationService,
        mockGitPullRequestBusinessRuleIsHotfixBranchMergeTrueDomainService,
        mockGitPullRequestIsPullRequestMergedTrueApplicationService,
        mockGitBranchBusinessRuleDomainService,
        mockGitAuthenticationApplicationService,
        mockGitRepositoryApplicationService,
        mockGitBranchRenameGitBranchRejectApplicationService,
        mockActionResultApplicationService);

    // Act
    await sut.start();
    await new Promise(process.nextTick);

    // Assert
    expect(mockGitEventApplicationService.getGitEventType).toBeCalledTimes(1);
    expect(mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService.isAllowedGitEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventApplicationService.getGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService.isAllowedGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(1);
    expect(mockGitSourceBranchNameApplicationService.getGitSourceBranchName).toBeCalledTimes(1);
    expect(mockGitTargetBranchNameApplicationService.getGitTargetBranchName).toBeCalledTimes(1);
    expect(mockGitPullRequestBusinessRuleIsHotfixBranchMergeTrueDomainService.isHotfixBranchMerge).toBeCalledTimes(1);
    expect(mockGitPullRequestIsPullRequestMergedTrueApplicationService.isPullRequestMerged).toBeCalledTimes(1);
    expect(mockGitBranchBusinessRuleDomainService.getFeatureBranchNameFromHotfixBranchName).toBeCalledTimes(1);
    expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(1);
    expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(1);
    expect(mockGitBranchRenameGitBranchRejectApplicationService.renameGitBranch).toBeCalledTimes(1);
    expect(mockGitBranchRenameGitBranchRejectApplicationService.createGitBranch).toBeCalledTimes(0);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_CreateGitBranchReject_ActionResultFalse_Ok", async () => {
    // Arrange
    let sut = new MainApplicationService(
        mockGitEventApplicationService,
        mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService,
        mockGitPullRequestEventApplicationService,
        mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService,
        mockGitDefaultBranchNameApplicationService,
        mockGitSourceBranchNameApplicationService,
        mockGitTargetBranchNameApplicationService,
        mockGitPullRequestBusinessRuleIsHotfixBranchMergeTrueDomainService,
        mockGitPullRequestIsPullRequestMergedTrueApplicationService,
        mockGitBranchBusinessRuleDomainService,
        mockGitAuthenticationApplicationService,
        mockGitRepositoryApplicationService,
        mockGitBranchCreateGitBranchRejectApplicationService,
        mockActionResultApplicationService);

    // Act
    await sut.start();
    await new Promise(process.nextTick);

    // Assert
    expect(mockGitEventApplicationService.getGitEventType).toBeCalledTimes(1);
    expect(mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService.isAllowedGitEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventApplicationService.getGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService.isAllowedGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(1);
    expect(mockGitSourceBranchNameApplicationService.getGitSourceBranchName).toBeCalledTimes(1);
    expect(mockGitTargetBranchNameApplicationService.getGitTargetBranchName).toBeCalledTimes(1);
    expect(mockGitPullRequestBusinessRuleIsHotfixBranchMergeTrueDomainService.isHotfixBranchMerge).toBeCalledTimes(1);
    expect(mockGitPullRequestIsPullRequestMergedTrueApplicationService.isPullRequestMerged).toBeCalledTimes(1);
    expect(mockGitBranchBusinessRuleDomainService.getFeatureBranchNameFromHotfixBranchName).toBeCalledTimes(1);
    expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(1);
    expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(1);
    expect(mockGitBranchCreateGitBranchRejectApplicationService.renameGitBranch).toBeCalledTimes(1);
    expect(mockGitBranchCreateGitBranchRejectApplicationService.createGitBranch).toBeCalledTimes(1);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

const mockGitEventApplicationService: jest.Mocked<IGitEventApplicationService> = {
    getGitEventType: jest.fn().mockImplementation(() => {
        return GitEventTypeEnum.PullRequest;
    })
};

const mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService: jest.Mocked<IGitEventBusinessRuleDomainService> = {
    isAllowedGitEventType: jest.fn().mockImplementation(() => {
        return true;
    })
};

const mockGitEventBusinessRuleIsAllowedGitEventTypeFalseDomainService: jest.Mocked<IGitEventBusinessRuleDomainService> = {
    isAllowedGitEventType: jest.fn().mockImplementation(() => {
        return false;
    })
};

const mockGitPullRequestEventApplicationService: jest.Mocked<IGitPullRequestEventApplicationService> = {
    getGitPullRequestEventType: jest.fn().mockImplementation(() => {
        return GitPullRequestEventTypeEnum.Closed;
    })
};

const mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService: jest.Mocked<IGitPullRequestEventBusinessRuleDomainService> = {
    isAllowedGitPullRequestEventType: jest.fn().mockImplementation(() => {
        return true;
    })
};

const mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeFalseDomainService: jest.Mocked<IGitPullRequestEventBusinessRuleDomainService> = {
    isAllowedGitPullRequestEventType: jest.fn().mockImplementation(() => {
        return false;
    })
};

const mockGitDefaultBranchNameApplicationService: jest.Mocked<IGitDefaultBranchNameApplicationService> = {
    getGitDefaultBranchName: jest.fn().mockImplementation(() => {
        return "main";
    })
};

const mockGitSourceBranchNameApplicationService: jest.Mocked<IGitSourceBranchNameApplicationService> = {
    getGitSourceBranchName: jest.fn().mockImplementation(() => {
        return "sourceBranchName";
    })
};

const mockGitTargetBranchNameApplicationService: jest.Mocked<IGitTargetBranchNameApplicationService> = {
    getGitTargetBranchName: jest.fn().mockImplementation(() => {
        return "targetBranchName";
    })
};

const mockGitPullRequestBusinessRuleIsHotfixBranchMergeTrueDomainService: jest.Mocked<IGitPullRequestBusinessRuleDomainService> = {
    isHotfixBranchMerge: jest.fn().mockImplementation(() => {
        return true;
    })
};

const mockGitPullRequestBusinessRuleIsHotfixBranchMergeFalseDomainService: jest.Mocked<IGitPullRequestBusinessRuleDomainService> = {
    isHotfixBranchMerge: jest.fn().mockImplementation(() => {
        return false;
    })
};

const mockGitPullRequestIsPullRequestMergedTrueApplicationService: jest.Mocked<IGitPullRequestApplicationService> = {
    isPullRequestMerged: jest.fn().mockImplementation(() => {
        return true;
    })
};

const mockGitPullRequestIsPullRequestMergedFalseApplicationService: jest.Mocked<IGitPullRequestApplicationService> = {
    isPullRequestMerged: jest.fn().mockImplementation(() => {
        return false;
    })
};

const mockGitBranchBusinessRuleDomainService: jest.Mocked<IGitBranchBusinessRuleDomainService> = {
    getFeatureBranchNameFromHotfixBranchName: jest.fn().mockImplementation(() => {
        return "featureBranchName";
    })
};

const mockGitAuthenticationApplicationService: jest.Mocked<IGitAuthenticationApplicationService> = {
    getGitAuthentication: jest.fn().mockImplementation(() => {
        return new GitAuthentication("token");
    })
};

const mockGitRepositoryApplicationService: jest.Mocked<IGitRepositoryApplicationService> = {
    getGitRepository: jest.fn().mockImplementation(() => {
        return new GitRepository("owner", "name");
    })
};

const mockGitBranchApplicationService: jest.Mocked<IGitBranchApplicationService> = {
    renameGitBranch: jest.fn().mockImplementation((branchName, newBranchName, gitRepository, gitAuthentication) => {
        return new Promise<Boolean>(function (resolve, reject) {
            resolve(true);
        });
    }),
    createGitBranch: jest.fn().mockImplementation((branchName, sourceBranchName, gitRepository, gitAuthentication) => {
        return new Promise<Boolean>(function (resolve, reject) {
            resolve(true);
        });
    })
};

const mockGitBranchRenameGitBranchRejectApplicationService: jest.Mocked<IGitBranchApplicationService> = {
    renameGitBranch: jest.fn().mockImplementation((branchName, newBranchName, gitRepository, gitAuthentication) => {
        return new Promise<Boolean>(function (resolve, reject) {
            reject(false);
        });
    }),
    createGitBranch: jest.fn().mockImplementation((branchName, sourceBranchName, gitRepository, gitAuthentication) => {
        return new Promise<Boolean>(function (resolve, reject) {
            resolve(true);
        });
    })
};

const mockGitBranchCreateGitBranchRejectApplicationService: jest.Mocked<IGitBranchApplicationService> = {
    renameGitBranch: jest.fn().mockImplementation((branchName, newBranchName, gitRepository, gitAuthentication) => {
        return new Promise<Boolean>(function (resolve, reject) {
            resolve(true);
        });
    }),
    createGitBranch: jest.fn().mockImplementation((branchName, sourceBranchName, gitRepository, gitAuthentication) => {
        return new Promise<Boolean>(function (resolve, reject) {
            reject(false);
        });
    })
};

const mockActionResultApplicationService: jest.Mocked<IActionResultApplicationService> = {
    setActionResult: jest.fn().mockImplementation(() => { }),
    omitActionResult: jest.fn().mockImplementation(() => { })
};