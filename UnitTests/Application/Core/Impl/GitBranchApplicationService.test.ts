import { IGitBranchRepositoryService } from "../../../../src/Infrastructure/Core/IGitBranchRepositoryService";
import { IGitBranchDomainService } from "../../../../src/Domain/Services/Core/IGitBranchDomainService";
import { GitBranchApplicationService } from "../../../../src/Application/Core/Impl/GitBranchApplicationService";
import { GitAuthentication } from "../../../../src/Domain/Entities/GitAuthentication";
import { GitRepository } from "../../../../src/Domain/Entities/GitRepository";

beforeEach(() => {
  jest.clearAllMocks();
});

test("renameGitBranch_Ok", () => {
  // Arrange
  let sut = new GitBranchApplicationService(mockGitBranchDomainService);

  // Act
  var result = sut.renameGitBranch(
    "branchName",
    "newBranchName",
    new GitRepository("owner", "name"),
    new GitAuthentication("token"));

  // Assert
  expect(mockGitBranchDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitBranchRepositoryService.renameGitBranch).toBeCalledTimes(1);
});

test("createGitBranch_Ok", () => {
  // Arrange
  let sut = new GitBranchApplicationService(mockGitBranchDomainService);

  // Act
  var result = sut.createGitBranch(
    "branchName",
    "sourceBranchName",
    new GitRepository("owner", "name"),
    new GitAuthentication("token"));

  // Assert
  expect(mockGitBranchDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitBranchRepositoryService.createGitBranch).toBeCalledTimes(1);
});

const mockGitBranchRepositoryService: jest.Mocked<IGitBranchRepositoryService> = {
  renameGitBranch: jest.fn().mockImplementation(() => {
    return new Promise<Boolean>(function (resolve, reject) { });
  }),
  createGitBranch: jest.fn().mockImplementation(() => {
    return new Promise<Boolean>(function (resolve, reject) { });
  })
};

const mockGitBranchDomainService: jest.Mocked<IGitBranchDomainService> = {
  getRepositoryService: jest.fn().mockImplementation(() => {
    return mockGitBranchRepositoryService;
  })
};