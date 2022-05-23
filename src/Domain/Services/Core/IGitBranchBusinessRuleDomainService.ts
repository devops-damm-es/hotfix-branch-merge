export abstract class IGitBranchBusinessRuleDomainService {
    abstract getFeatureBranchNameFromHotfixBranchName(hotfixBranchName: String): String;
}