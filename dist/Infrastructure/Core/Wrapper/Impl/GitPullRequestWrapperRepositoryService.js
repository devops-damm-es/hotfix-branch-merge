"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitPullRequestWrapperRepositoryService = void 0;
class GitPullRequestWrapperRepositoryService {
    isPullRequestMerged() {
        try {
            const pullRequestMerged = process.env.PULL_REQUEST_MERGED;
            if (pullRequestMerged != null && pullRequestMerged.length > 0) {
                return pullRequestMerged.toLowerCase() == "true";
            }
            else {
                return false;
            }
        }
        catch (_a) {
            return null;
        }
    }
}
exports.GitPullRequestWrapperRepositoryService = GitPullRequestWrapperRepositoryService;
//# sourceMappingURL=GitPullRequestWrapperRepositoryService.js.map