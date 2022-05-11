import { GitSourceBranchNameRepositoryService } from "../../../../src/Infrastructure/Core/Impl/GitSourceBranchNameRepositoryService";
import { IGitSourceBranchNameWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IGitSourceBranchNameWrapperRepositoryService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitSourceBranchName_Ok", () => {
  // Arrange
  let sut = new GitSourceBranchNameRepositoryService(mockGitSourceBranchNameWrapperRepositoryService);

  // Act
  var result = sut.getGitSourceBranchName();

  // Assert
  expect(mockGitSourceBranchNameWrapperRepositoryService.getGitSourceBranchName).toBeCalledTimes(1);
  expect(result).toBe("source");
});

test("getGitSourceBranchName_ReturnsNull_Ok", () => {
  // Arrange
  let sut = new GitSourceBranchNameRepositoryService(mockGitSourceBranchNameWrapperNullRepositoryService);

  // Act
  var result = () => sut.getGitSourceBranchName();

  // Assert
  expect(result).toThrow(Error);
});

const mockGitSourceBranchNameWrapperRepositoryService: jest.Mocked<IGitSourceBranchNameWrapperRepositoryService> = {
  getGitSourceBranchName: jest.fn().mockImplementation(() => {
    return "source";
  })
};

const mockGitSourceBranchNameWrapperNullRepositoryService: jest.Mocked<IGitSourceBranchNameWrapperRepositoryService> = {
  getGitSourceBranchName: jest.fn().mockImplementation(() => {
    return null;
  })
};