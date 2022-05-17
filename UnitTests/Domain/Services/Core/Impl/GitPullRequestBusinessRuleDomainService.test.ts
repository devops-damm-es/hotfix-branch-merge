import { GitPullRequestBusinessRuleDomainService } from "../../../../../src/Domain/Services/Core/Impl/GitPullRequestBusinessRuleDomainService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("isHotfixBranchMerge_MainTarget_ReturnsTrue_Ok", () => {
  // Arrange
  var sourceBranchNameArray = [
    "hotfix/MyHotfix"
  ];
  let sut = new GitPullRequestBusinessRuleDomainService();

  for (var index in sourceBranchNameArray) {

    // Act
    var result = sut.isHotfixBranchMerge(sourceBranchNameArray[index], "main", "main");

    // Assert
    expect(result).toBe(true);
  }
});

test("isHotfixBranchMerge_MainTarget_ReturnsFalse_Ok", () => {
  // Arrange
  var sourceBranchNameArray = [
    "develop",
    "release/MyRelease"
  ];
  let sut = new GitPullRequestBusinessRuleDomainService();

  for (var index in sourceBranchNameArray) {

    // Act
    var result = sut.isHotfixBranchMerge(sourceBranchNameArray[index], "main", "main");

    // Assert
    expect(result).toBe(false);
  }
});

test("isHotfixBranchMerge_MasterTarget_ReturnsTrue_Ok", () => {
  // Arrange
  var sourceBranchNameArray = [
    "hotfix/MyHotfix"
  ];
  let sut = new GitPullRequestBusinessRuleDomainService();

  for (var index in sourceBranchNameArray) {

    // Act
    var result = sut.isHotfixBranchMerge(sourceBranchNameArray[index], "master", "master");

    // Assert
    expect(result).toBe(true);
  }
});

test("isHotfixBranchMerge_MasterTarget_ReturnsFalse_Ok", () => {
  // Arrange
  var sourceBranchNameArray = [
    "develop",
    "release/MyRelease"
  ];
  let sut = new GitPullRequestBusinessRuleDomainService();

  for (var index in sourceBranchNameArray) {

    // Act
    var result = sut.isHotfixBranchMerge(sourceBranchNameArray[index], "master", "master");

    // Assert
    expect(result).toBe(false);
  }
});

test("isHotfixBranchMerge_DevelopTarget_ReturnsFalse_Ok", () => {
  // Arrange
  var sourceBranchNameArray = [
    "feature/MyFeature"
  ];
  let sut = new GitPullRequestBusinessRuleDomainService();

  for (var index in sourceBranchNameArray) {

    // Act
    var result = sut.isHotfixBranchMerge(sourceBranchNameArray[index], "develop", "main");

    // Assert
    expect(result).toBe(false);
  }
});