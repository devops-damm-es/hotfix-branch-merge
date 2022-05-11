import * as core from '@actions/core';
import { IActionResultWrapperRepositoryService } from "../IActionResultWrapperRepositoryService";

export class ActionResultWrapperRepositoryService implements IActionResultWrapperRepositoryService {
    setActionResult(success: Boolean, message: String) {
        try {
            core.setOutput("hotfix_branch_merge_success", success);
            if (success == true) {
                core.info(message as string);
            } else {
                core.setFailed(message as string);
            }
        } catch { }
    }
}