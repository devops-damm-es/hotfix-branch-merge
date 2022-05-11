import { IGitPullRequestRepositoryService } from "../../../../src/Infrastructure/Core/IGitPullRequestRepositoryService";
import { IGitPullRequestDomainService } from "../../../../src/Domain/Services/Core/IGitPullRequestDomainService";
import { GitPullRequestApplicationService } from "../../../../src/Application/Core/Impl/GitPullRequestApplicationService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("isPullRequestMerged_Ok", () => {
  // Arrange
  let sut = new GitPullRequestApplicationService(mockGitPullRequestDomainService);

  // Act
  var result = sut.isPullRequestMerged();

  // Assert
  expect(mockGitPullRequestDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitPullRequestRepositoryService.isPullRequestMerged).toBeCalledTimes(1);
  expect(result).toBe(true);
});

const mockGitPullRequestRepositoryService: jest.Mocked<IGitPullRequestRepositoryService> = {
  isPullRequestMerged: jest.fn().mockImplementation(() => {
    return true;
  })
};

const mockGitPullRequestDomainService: jest.Mocked<IGitPullRequestDomainService> = {
  getRepositoryService: jest.fn().mockImplementation(() => {
    return mockGitPullRequestRepositoryService;
  })
};