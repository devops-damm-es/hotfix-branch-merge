import { GitPullRequestEventTypeEnum } from "../../../../src/Domain/Enums/GitPullRequestEventTypeEnum";
import { IGitPullRequestEventRepositoryService } from "../../../../src/Infrastructure/Core/IGitPullRequestEventRepositoryService";
import { IGitPullRequestEventDomainService } from "../../../../src/Domain/Services/Core/IGitPullRequestEventDomainService";
import { GitPullRequestEventApplicationService } from "../../../../src/Application/Core/Impl/GitPullRequestEventApplicationService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitPullRequestEventType_Ok", () => {
  // Arrange
  let sut = new GitPullRequestEventApplicationService(mockGitPullRequestEventDomainService);

  // Act
  var result = sut.getGitPullRequestEventType();

  // Assert
  expect(mockGitPullRequestEventDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitPullRequestEventRepositoryService.getGitPullRequestEventType).toBeCalledTimes(1);
  expect(result).toBe(GitPullRequestEventTypeEnum.Opened);
});

const mockGitPullRequestEventRepositoryService: jest.Mocked<IGitPullRequestEventRepositoryService> = {
  getGitPullRequestEventType: jest.fn().mockImplementation(() => {
    return GitPullRequestEventTypeEnum.Opened;
  })
};

const mockGitPullRequestEventDomainService: jest.Mocked<IGitPullRequestEventDomainService> = {
  getRepositoryService: jest.fn().mockImplementation(() => {
    return mockGitPullRequestEventRepositoryService;
  })
};