"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitTargetBranchNameWrapperRepositoryService = void 0;
class GitTargetBranchNameWrapperRepositoryService {
    getGitTargetBranchName() {
        try {
            const targetBranchName = process.env.TARGET_BRANCH_NAME;
            if (targetBranchName != null && targetBranchName.length > 0) {
                return targetBranchName;
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
exports.GitTargetBranchNameWrapperRepositoryService = GitTargetBranchNameWrapperRepositoryService;
//# sourceMappingURL=GitTargetBranchNameWrapperRepositoryService.js.map