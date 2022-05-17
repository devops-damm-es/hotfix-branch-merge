import { IGitPullRequestBusinessRuleDomainService } from "../IGitPullRequestBusinessRuleDomainService";

export class GitPullRequestBusinessRuleDomainService implements IGitPullRequestBusinessRuleDomainService {
    isHotfixBranchMerge(sourceBranchName: String, targetBranchName: String, defaultBranchName: String): Boolean {
        var allowedPullRequestList = [];
        allowedPullRequestList.push({
            sourceRegex: '^hotfix\/.*',
            targetRegex: '^' + defaultBranchName + '$'
        });
        for (var index in allowedPullRequestList) {
            var sourceRegex = new RegExp(allowedPullRequestList[index].sourceRegex);
            var targetRegex = new RegExp(allowedPullRequestList[index].targetRegex);
            if (sourceRegex.test(sourceBranchName as string) && targetRegex.test(targetBranchName as string)) {
                return true;
            }
        }
        return false;
    }
}