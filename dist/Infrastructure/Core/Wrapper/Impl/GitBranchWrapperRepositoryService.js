"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitBranchWrapperRepositoryService = void 0;
const github = require("@actions/github");
class GitBranchWrapperRepositoryService {
    renameGitBranch(branchName, newBranchName, gitRepository, gitAuthentication) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                try {
                    const client = github.getOctokit(gitAuthentication.token);
                    client.repos.renameBranch({
                        branch: branchName,
                        new_name: newBranchName,
                        owner: gitRepository.owner,
                        repo: gitRepository.name,
                    })
                        .then(_ => { resolve(true); })
                        .catch(_ => { reject(false); });
                }
                catch (_a) {
                    reject(false);
                }
            });
        });
    }
    createGitBranch(branchName, sourceBranchName, gitRepository, gitAuthentication) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                try {
                    const client = github.getOctokit(gitAuthentication.token);
                    client.git.getRef({
                        ref: 'refs/heads/' + sourceBranchName,
                        owner: gitRepository.owner,
                        repo: gitRepository.name,
                    })
                        .then(result => {
                        console.log('result.data.object.sha: ' + result.data.object.sha);
                        client.git.createRef({
                            ref: 'refs/heads/' + branchName,
                            sha: result.data.object.sha,
                            owner: gitRepository.owner,
                            repo: gitRepository.name,
                        })
                            .then(_ => { resolve(true); })
                            .catch(_ => { reject(false); });
                    })
                        .catch(_ => { reject(false); });
                }
                catch (_a) {
                    reject(false);
                }
            });
        });
    }
}
exports.GitBranchWrapperRepositoryService = GitBranchWrapperRepositoryService;
//# sourceMappingURL=GitBranchWrapperRepositoryService.js.map