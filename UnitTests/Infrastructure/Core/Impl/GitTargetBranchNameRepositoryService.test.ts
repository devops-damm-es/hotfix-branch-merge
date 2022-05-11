import { GitTargetBranchNameRepositoryService } from "../../../../src/Infrastructure/Core/Impl/GitTargetBranchNameRepositoryService";
import { IGitTargetBranchNameWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IGitTargetBranchNameWrapperRepositoryService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitTargetBranchName_Ok", () => {
  // Arrange
  let sut = new GitTargetBranchNameRepositoryService(mockGitTargetBranchNameWrapperRepositoryService);

  // Act
  var result = sut.getGitTargetBranchName();

  // Assert
  expect(mockGitTargetBranchNameWrapperRepositoryService.getGitTargetBranchName).toBeCalledTimes(1);
  expect(result).toBe("target");
});

test("getGitTargetBranchName_ReturnsNull_Ok", () => {
  // Arrange
  let sut = new GitTargetBranchNameRepositoryService(mockGitTargetBranchNameWrapperNullRepositoryService);

  // Act
  var result = () => sut.getGitTargetBranchName();

  // Assert
  expect(result).toThrow(Error);
});

const mockGitTargetBranchNameWrapperRepositoryService: jest.Mocked<IGitTargetBranchNameWrapperRepositoryService> = {
  getGitTargetBranchName: jest.fn().mockImplementation(() => {
    return "target";
  })
};

const mockGitTargetBranchNameWrapperNullRepositoryService: jest.Mocked<IGitTargetBranchNameWrapperRepositoryService> = {
  getGitTargetBranchName: jest.fn().mockImplementation(() => {
    return null;
  })
};