import { IGitBranchBusinessRuleDomainService } from "../IGitBranchBusinessRuleDomainService";

export class GitBranchBusinessRuleDomainService implements IGitBranchBusinessRuleDomainService {

    getFeatureBranchNameFromHotfixBranchName(hotfixBranchName: String): String {
        return "feature/" + hotfixBranchName; //TODO: Add random string
    }
}