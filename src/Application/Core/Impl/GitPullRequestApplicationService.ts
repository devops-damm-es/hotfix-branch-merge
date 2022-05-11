import { Inject } from "typescript-ioc";
import { IGitPullRequestDomainService } from "../../../Domain/Services/Core/IGitPullRequestDomainService";
import { IGitPullRequestApplicationService } from "../IGitPullRequestApplicationService";

export class GitPullRequestApplicationService implements IGitPullRequestApplicationService {

    private gitPullRequestDomainService: IGitPullRequestDomainService;

    constructor(@Inject gitPullRequestDomainService: IGitPullRequestDomainService) {
        this.gitPullRequestDomainService = gitPullRequestDomainService;
    }

    isPullRequestMerged(): Boolean {
        return this.gitPullRequestDomainService.getRepositoryService().isPullRequestMerged();
    }
}