export abstract class IGitPullRequestBusinessRuleDomainService {
    abstract isHotfixBranchMerge(sourceBranchName: String, targetBranchName: String, defaultBranchName: String): Boolean;
}