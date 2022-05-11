import { GitPullRequestRepositoryService } from "../../../../src/Infrastructure/Core/Impl/GitPullRequestRepositoryService";
import { IGitPullRequestWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IGitPullRequestWrapperRepositoryService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("isPullRequestMerged_Ok", () => {
  // Arrange
  let sut = new GitPullRequestRepositoryService(mockGitPullRequestWrapperRepositoryService);

  // Act
  var result = sut.isPullRequestMerged();

  // Assert
  expect(mockGitPullRequestWrapperRepositoryService.isPullRequestMerged).toBeCalledTimes(1);
  expect(result).toBe(true);
});

test("isPullRequestMerged_ReturnsNull_Ok", () => {
  // Arrange
  let sut = new GitPullRequestRepositoryService(mockGitPullRequestWrapperNullRepositoryService);

  // Act
  var result = () => sut.isPullRequestMerged();

  // Assert
  expect(result).toThrow(Error);
});

const mockGitPullRequestWrapperRepositoryService: jest.Mocked<IGitPullRequestWrapperRepositoryService> = {
  isPullRequestMerged: jest.fn().mockImplementation(() => {
    return true;
  })
};

const mockGitPullRequestWrapperNullRepositoryService: jest.Mocked<IGitPullRequestWrapperRepositoryService> = {
  isPullRequestMerged: jest.fn().mockImplementation(() => {
    return null;
  })
};