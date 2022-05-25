import { GitPullRequestEventTypeEnum } from "../../../../src/Domain/Enums/GitPullRequestEventTypeEnum";
import { GitPullRequestEventRepositoryService } from "../../../../src/Infrastructure/Core/Impl/GitPullRequestEventRepositoryService";
import { IGitPullRequestEventWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IGitPullRequestEventWrapperRepositoryService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitPullRequestEventType_Ok", () => {
  // Arrange
  let sut = new GitPullRequestEventRepositoryService(mockGitPullRequestEventWrapperRepositoryService);

  // Act
  var result = sut.getGitPullRequestEventType();

  // Assert
  expect(mockGitPullRequestEventWrapperRepositoryService.getGitPullRequestEventType).toBeCalledTimes(1);
  expect(result).toBe(GitPullRequestEventTypeEnum.Opened);
});

test("getGitPullRequestEventType_ReturnsNull_Ok", () => {
  // Arrange
  let sut = new GitPullRequestEventRepositoryService(mockGitPullRequestEventWrapperNullRepositoryService);

  // Act
  var result = () => sut.getGitPullRequestEventType();

  // Assert
  expect(result).toThrow(Error);
});

const mockGitPullRequestEventWrapperRepositoryService: jest.Mocked<IGitPullRequestEventWrapperRepositoryService> = {
  getGitPullRequestEventType: jest.fn().mockImplementation(() => {
    return GitPullRequestEventTypeEnum.Opened;
  })
};

const mockGitPullRequestEventWrapperNullRepositoryService: jest.Mocked<IGitPullRequestEventWrapperRepositoryService> = {
  getGitPullRequestEventType: jest.fn().mockImplementation(() => {
    return null;
  })
};