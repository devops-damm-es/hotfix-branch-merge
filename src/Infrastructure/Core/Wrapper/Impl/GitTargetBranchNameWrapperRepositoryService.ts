import { IGitTargetBranchNameWrapperRepositoryService } from '../IGitTargetBranchNameWrapperRepositoryService';

export class GitTargetBranchNameWrapperRepositoryService implements IGitTargetBranchNameWrapperRepositoryService {
    getGitTargetBranchName(): String | null {
        try {
            const targetBranchName = process.env.TARGET_BRANCH_NAME;
            if (targetBranchName != null && targetBranchName.length > 0) {
                return targetBranchName;
            } else {
                return null;
            }
        } catch {
            return null;
        }
    }
}