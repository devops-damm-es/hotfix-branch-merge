import * as github from '@actions/github';
import { GitPullRequestEventTypeEnum } from "../../../../Domain/Enums/GitPullRequestEventTypeEnum";
import { IGitPullRequestEventWrapperRepositoryService } from "../IGitPullRequestEventWrapperRepositoryService";

export class GitPullRequestEventWrapperRepositoryService implements IGitPullRequestEventWrapperRepositoryService {
    getGitPullRequestEventType(): GitPullRequestEventTypeEnum | null {
        try {
            var githubPullRequestEventName = github.context.payload.action;
            if (githubPullRequestEventName == "assigned") {
                return GitPullRequestEventTypeEnum.Assigned;
            } else if (githubPullRequestEventName == "unassigned") {
                return GitPullRequestEventTypeEnum.Unassigned;
            } else if (githubPullRequestEventName == "labeled") {
                return GitPullRequestEventTypeEnum.Labeled;
            } else if (githubPullRequestEventName == "unlabeled") {
                return GitPullRequestEventTypeEnum.Unlabeled;
            } else if (githubPullRequestEventName == "opened") {
                return GitPullRequestEventTypeEnum.Opened;
            } else if (githubPullRequestEventName == "edited") {
                return GitPullRequestEventTypeEnum.Edited;
            } else if (githubPullRequestEventName == "closed") {
                return GitPullRequestEventTypeEnum.Closed;
            } else if (githubPullRequestEventName == "reopened") {
                return GitPullRequestEventTypeEnum.Reopened;
            } else if (githubPullRequestEventName == "synchronize") {
                return GitPullRequestEventTypeEnum.Synchronize;
            } else if (githubPullRequestEventName == "converted_to_draft") {
                return GitPullRequestEventTypeEnum.ConvertedToDraft;
            } else if (githubPullRequestEventName == "ready_for_review") {
                return GitPullRequestEventTypeEnum.ReadyForReview;
            } else if (githubPullRequestEventName == "locked") {
                return GitPullRequestEventTypeEnum.Locked;
            } else if (githubPullRequestEventName == "unlocked") {
                return GitPullRequestEventTypeEnum.Unlocked;
            } else if (githubPullRequestEventName == "review_requested") {
                return GitPullRequestEventTypeEnum.ReviewRequested;
            } else if (githubPullRequestEventName == "review_request_removed") {
                return GitPullRequestEventTypeEnum.ReviewRequestRemoved;
            } else if (githubPullRequestEventName == "auto_merge_enabled") {
                return GitPullRequestEventTypeEnum.AutoMergeEnabled;
            } else if (githubPullRequestEventName == "auto_merge_disabled") {
                return GitPullRequestEventTypeEnum.AutoMergeDisabled;
            } else {
                return null;
            }
        } catch {
            return null;
        }
    }
}