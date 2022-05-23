"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionResultWrapperRepositoryService = void 0;
const core = require("@actions/core");
class ActionResultWrapperRepositoryService {
    setActionResult(success, message) {
        try {
            core.setOutput("is_hotfix_branch_merge", true);
            core.setOutput("hotfix_branch_merge_success", success);
            if (success == true) {
                core.info(message);
            }
            else {
                core.setFailed(message);
            }
        }
        catch (_a) { }
    }
    omitActionResult(message) {
        try {
            core.setOutput("is_hotfix_branch_merge", false);
            core.info(message);
        }
        catch (_a) { }
    }
}
exports.ActionResultWrapperRepositoryService = ActionResultWrapperRepositoryService;
//# sourceMappingURL=ActionResultWrapperRepositoryService.js.map