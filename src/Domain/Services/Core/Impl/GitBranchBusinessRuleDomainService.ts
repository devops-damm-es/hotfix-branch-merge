import { IGitBranchBusinessRuleDomainService } from "../IGitBranchBusinessRuleDomainService";

export class GitBranchBusinessRuleDomainService implements IGitBranchBusinessRuleDomainService {

    getFeatureBranchNameFromHotfixBranchName(hotfixBranchName: String): String {
        var timestamp = new Date().getTime().toString();
        var branchName = hotfixBranchName.substring("hotfix/".length, hotfixBranchName.length);
        return "feature/" + branchName + "_" + timestamp;
    }
}