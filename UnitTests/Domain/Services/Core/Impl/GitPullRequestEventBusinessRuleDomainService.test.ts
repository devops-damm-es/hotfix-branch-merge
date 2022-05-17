import { GitPullRequestEventTypeEnum } from "../../../../../src/Domain/Enums/GitPullRequestEventTypeEnum";
import { GitPullRequestEventBusinessRuleDomainService } from "../../../../../src/Domain/Services/Core/Impl/GitPullRequestEventBusinessRuleDomainService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("isAllowedGitPullRequestEventType_ReturnsTrue_Ok", () => {
  // Arrange
  var gitPullRequestEventTypeEnumArray = [
    GitPullRequestEventTypeEnum.Closed
  ];
  let sut = new GitPullRequestEventBusinessRuleDomainService();

  for (var index in gitPullRequestEventTypeEnumArray) {

    // Act
    var result = sut.isAllowedGitPullRequestEventType(gitPullRequestEventTypeEnumArray[index]);

    // Assert
    expect(result).toBe(true);
  }
});

test("isAllowedGitPullRequestEventType_ReturnsFalse_Ok", () => {
  // Arrange
  var gitPullRequestEventTypeEnumArray = [
    GitPullRequestEventTypeEnum.Assigned,
    GitPullRequestEventTypeEnum.Unassigned,
    GitPullRequestEventTypeEnum.Labeled,
    GitPullRequestEventTypeEnum.Unlabeled,
    GitPullRequestEventTypeEnum.Opened,
    GitPullRequestEventTypeEnum.Edited,
    GitPullRequestEventTypeEnum.Reopened,
    GitPullRequestEventTypeEnum.Synchronize,
    GitPullRequestEventTypeEnum.ConvertedToDraft,
    GitPullRequestEventTypeEnum.ReadyForReview,
    GitPullRequestEventTypeEnum.Locked,
    GitPullRequestEventTypeEnum.Unlocked,
    GitPullRequestEventTypeEnum.ReviewRequested,
    GitPullRequestEventTypeEnum.ReviewRequestRemoved,
    GitPullRequestEventTypeEnum.AutoMergeEnabled,
    GitPullRequestEventTypeEnum.AutoMergeDisabled
  ];
  let sut = new GitPullRequestEventBusinessRuleDomainService();

  for (var index in gitPullRequestEventTypeEnumArray) {

    // Act
    var result = sut.isAllowedGitPullRequestEventType(gitPullRequestEventTypeEnumArray[index]);

    // Assert
    expect(result).toBe(false);
  }
});