import { IGitSourceBranchNameWrapperRepositoryService } from '../IGitSourceBranchNameWrapperRepositoryService';

export class GitSourceBranchNameWrapperRepositoryService implements IGitSourceBranchNameWrapperRepositoryService {
    getGitSourceBranchName(): String | null {
        try {
            const sourceBranchName = process.env.SOURCE_BRANCH_NAME;
            if (sourceBranchName != null && sourceBranchName.length > 0) {
                return sourceBranchName;
            } else {
                return null;
            }
        } catch {
            return null;
        }
    }
}