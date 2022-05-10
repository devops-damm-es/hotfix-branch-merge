import { GitAuthentication } from "../../../../src/Domain/Entities/GitAuthentication";
import { GitRepository } from "../../../../src/Domain/Entities/GitRepository";
import { GitBranchRepositoryService } from "../../../../src/Infrastructure/Core/Impl/GitBranchRepositoryService";
import { IGitBranchWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("renameGitBranch_Ok", () => {
  // Arrange
  let sut = new GitBranchRepositoryService(mockGitBranchWrapperRepositoryService);

  // Act
  var result = sut.renameGitBranch(
    "branchName",
    "newBranchName",
    new GitRepository("owner", "name"),
    new GitAuthentication("token"));

  // Assert
  expect(mockGitBranchWrapperRepositoryService.renameGitBranch).toBeCalledTimes(1);
});

test("createGitBranch_Ok", () => {
  // Arrange
  let sut = new GitBranchRepositoryService(mockGitBranchWrapperRepositoryService);

  // Act
  var result = sut.createGitBranch(
    "branchName",
    "sourceBranchName",
    new GitRepository("owner", "name"),
    new GitAuthentication("token"));

  // Assert
  expect(mockGitBranchWrapperRepositoryService.createGitBranch).toBeCalledTimes(1);
});

const mockGitBranchWrapperRepositoryService: jest.Mocked<IGitBranchWrapperRepositoryService> = {
  renameGitBranch: jest.fn().mockImplementation(() => {
    return new Promise<Boolean>(function (resolve, reject) { });
  }),
  createGitBranch: jest.fn().mockImplementation(() => {
    return new Promise<Boolean>(function (resolve, reject) { });
  })
};