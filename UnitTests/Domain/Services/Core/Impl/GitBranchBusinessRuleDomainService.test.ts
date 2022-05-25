import { GitBranchBusinessRuleDomainService } from "../../../../../src/Domain/Services/Core/Impl/GitBranchBusinessRuleDomainService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getFeatureBranchNameFromHotfixBranchName_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.getFeatureBranchNameFromHotfixBranchName("hotfix/MyHotfix");

  // Assert
  expect(result).toContain("feature/MyHotfix_");
});