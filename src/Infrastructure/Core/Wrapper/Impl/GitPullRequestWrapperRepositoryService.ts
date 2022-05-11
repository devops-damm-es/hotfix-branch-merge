import * as github from '@actions/github';
import { IGitPullRequestWrapperRepositoryService } from "../IGitPullRequestWrapperRepositoryService";

export class GitPullRequestWrapperRepositoryService implements IGitPullRequestWrapperRepositoryService {
    isPullRequestMerged(): Boolean | null {
        try {
            const pullRequestMerged = process.env.PULL_REQUEST_MERGED;
            if (pullRequestMerged != null && pullRequestMerged.length > 0) {
                return pullRequestMerged.toLowerCase() == "true";
            }
            else {
                return false;
            }
        } catch {
            return null;
        }
    }
}