import { IGitTargetBranchNameRepositoryService } from "../../../../src/Infrastructure/Core/IGitTargetBranchNameRepositoryService";
import { IGitTargetBranchNameDomainService } from "../../../../src/Domain/Services/Core/IGitTargetBranchNameDomainService";
import { GitTargetBranchNameApplicationService } from "../../../../src/Application/Core/Impl/GitTargetBranchNameApplicationService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitTargetBranchName_Ok", () => {
  // Arrange
  let sut = new GitTargetBranchNameApplicationService(mockGitTargetBranchNameDomainService);

  // Act
  var result = sut.getGitTargetBranchName();

  // Assert
  expect(mockGitTargetBranchNameDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitTargetBranchNameRepositoryService.getGitTargetBranchName).toBeCalledTimes(1);
  expect(result).toBe("target");
});

const mockGitTargetBranchNameRepositoryService: jest.Mocked<IGitTargetBranchNameRepositoryService> = {
  getGitTargetBranchName: jest.fn().mockImplementation(() => {
    return "target";
  })
};

const mockGitTargetBranchNameDomainService: jest.Mocked<IGitTargetBranchNameDomainService> = {
  getRepositoryService: jest.fn().mockImplementation(() => {
    return mockGitTargetBranchNameRepositoryService;
  })
};