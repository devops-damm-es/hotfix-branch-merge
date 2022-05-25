"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitBranchBusinessRuleDomainService = void 0;
class GitBranchBusinessRuleDomainService {
    getFeatureBranchNameFromHotfixBranchName(hotfixBranchName) {
        var timestamp = new Date().getTime().toString();
        var branchName = hotfixBranchName.substring("hotfix/".length, hotfixBranchName.length);
        return "feature/" + branchName + "_" + timestamp;
    }
}
exports.GitBranchBusinessRuleDomainService = GitBranchBusinessRuleDomainService;
//# sourceMappingURL=GitBranchBusinessRuleDomainService.js.map