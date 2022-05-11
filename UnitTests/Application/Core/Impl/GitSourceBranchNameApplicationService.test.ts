import { IGitSourceBranchNameRepositoryService } from "../../../../src/Infrastructure/Core/IGitSourceBranchNameRepositoryService";
import { IGitSourceBranchNameDomainService } from "../../../../src/Domain/Services/Core/IGitSourceBranchNameDomainService";
import { GitSourceBranchNameApplicationService } from "../../../../src/Application/Core/Impl/GitSourceBranchNameApplicationService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitSourceBranchName_Ok", () => {
  // Arrange
  let sut = new GitSourceBranchNameApplicationService(mockGitSourceBranchNameDomainService);

  // Act
  var result = sut.getGitSourceBranchName();

  // Assert
  expect(mockGitSourceBranchNameDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitSourceBranchNameRepositoryService.getGitSourceBranchName).toBeCalledTimes(1);
  expect(result).toBe("source");
});

const mockGitSourceBranchNameRepositoryService: jest.Mocked<IGitSourceBranchNameRepositoryService> = {
  getGitSourceBranchName: jest.fn().mockImplementation(() => {
    return "source";
  })
};

const mockGitSourceBranchNameDomainService: jest.Mocked<IGitSourceBranchNameDomainService> = {
  getRepositoryService: jest.fn().mockImplementation(() => {
    return mockGitSourceBranchNameRepositoryService;
  })
};