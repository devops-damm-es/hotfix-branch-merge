"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitSourceBranchNameWrapperRepositoryService = void 0;
class GitSourceBranchNameWrapperRepositoryService {
    getGitSourceBranchName() {
        try {
            const sourceBranchName = process.env.SOURCE_BRANCH_NAME;
            if (sourceBranchName != null && sourceBranchName.length > 0) {
                return sourceBranchName;
            }
            else {
                return null;
            }
        }
        catch (_a) {
            return null;
        }
    }
}
exports.GitSourceBranchNameWrapperRepositoryService = GitSourceBranchNameWrapperRepositoryService;
//# sourceMappingURL=GitSourceBranchNameWrapperRepositoryService.js.map