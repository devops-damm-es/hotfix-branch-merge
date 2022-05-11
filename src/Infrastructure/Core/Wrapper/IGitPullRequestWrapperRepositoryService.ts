import { GitRepository } from "../../../Domain/Entities/GitRepository";

export abstract class IGitPullRequestWrapperRepositoryService {
    abstract isPullRequestMerged(): Boolean | null;
}