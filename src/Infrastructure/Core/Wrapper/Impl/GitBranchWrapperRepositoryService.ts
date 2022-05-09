import * as github from '@actions/github';
import { GitAuthentication } from '../../../../Domain/Entities/GitAuthentication';
import { GitRepository } from '../../../../Domain/Entities/GitRepository';
import { IGitBranchWrapperRepositoryService } from "../IGitBranchWrapperRepositoryService";

export class GitBranchWrapperRepositoryService implements IGitBranchWrapperRepositoryService {
    async renameGitBranch(
        branchName: String,
        newBranchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<Boolean> {
        return new Promise<Boolean>(function (resolve, reject) {
            try {
                const client = github.getOctokit(gitAuthentication.token as string);
                client.repos.renameBranch({
                    branch: branchName as string,
                    new_name: newBranchName as string,
                    owner: gitRepository.owner as string,
                    repo: gitRepository.name as string,
                })
                    .then(_ => { resolve(true); })
                    .catch(_ => { reject(false); })
            } catch {
                reject(false);
            }
        });
    }

    async createGitBranch(
        branchName: String,
        sourceBranchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<Boolean> {
        return new Promise<Boolean>(function (resolve, reject) {
            try {
                const client = github.getOctokit(gitAuthentication.token as string);
                client.git.getRef({
                    ref: 'heads/' + sourceBranchName as string,
                    owner: gitRepository.owner as string,
                    repo: gitRepository.name as string,
                })
                    .then(result => {
                        client.git.createRef({
                            ref: 'refs/heads/' + branchName as string,
                            sha: result.data.object.sha,
                            owner: gitRepository.owner as string,
                            repo: gitRepository.name as string,
                        })
                            .then(_ => { resolve(true); })
                            .catch(_ => { reject(false); })
                    })
                    .catch(_ => { reject(false); })
            } catch {
                reject(false);
            }
        });
    }
}