"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitPullRequestEventWrapperRepositoryService = void 0;
const github = require("@actions/github");
const GitPullRequestEventTypeEnum_1 = require("../../../../Domain/Enums/GitPullRequestEventTypeEnum");
class GitPullRequestEventWrapperRepositoryService {
    getGitPullRequestEventType() {
        try {
            var githubPullRequestEventName = github.context.payload.action;
            if (githubPullRequestEventName == "assigned") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.Assigned;
            }
            else if (githubPullRequestEventName == "unassigned") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.Unassigned;
            }
            else if (githubPullRequestEventName == "labeled") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.Labeled;
            }
            else if (githubPullRequestEventName == "unlabeled") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.Unlabeled;
            }
            else if (githubPullRequestEventName == "opened") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.Opened;
            }
            else if (githubPullRequestEventName == "edited") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.Edited;
            }
            else if (githubPullRequestEventName == "closed") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.Closed;
            }
            else if (githubPullRequestEventName == "reopened") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.Reopened;
            }
            else if (githubPullRequestEventName == "synchronize") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.Synchronize;
            }
            else if (githubPullRequestEventName == "converted_to_draft") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.ConvertedToDraft;
            }
            else if (githubPullRequestEventName == "ready_for_review") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.ReadyForReview;
            }
            else if (githubPullRequestEventName == "locked") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.Locked;
            }
            else if (githubPullRequestEventName == "unlocked") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.Unlocked;
            }
            else if (githubPullRequestEventName == "review_requested") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.ReviewRequested;
            }
            else if (githubPullRequestEventName == "review_request_removed") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.ReviewRequestRemoved;
            }
            else if (githubPullRequestEventName == "auto_merge_enabled") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.AutoMergeEnabled;
            }
            else if (githubPullRequestEventName == "auto_merge_disabled") {
                return GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum.AutoMergeDisabled;
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
exports.GitPullRequestEventWrapperRepositoryService = GitPullRequestEventWrapperRepositoryService;
//# sourceMappingURL=GitPullRequestEventWrapperRepositoryService.js.map