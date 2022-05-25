import { Inject } from "typescript-ioc";
import { GitPullRequestEventTypeEnum } from "../../../Domain/Enums/GitPullRequestEventTypeEnum";
import { IGitPullRequestEventDomainService } from "../../../Domain/Services/Core/IGitPullRequestEventDomainService";
import { IGitPullRequestEventApplicationService } from "../IGitPullRequestEventApplicationService";

export class GitPullRequestEventApplicationService implements IGitPullRequestEventApplicationService {

    private gitPullRequestEventDomainService: IGitPullRequestEventDomainService;

    constructor(@Inject gitPullRequestEventDomainService: IGitPullRequestEventDomainService) {
        this.gitPullRequestEventDomainService = gitPullRequestEventDomainService;
    }

    getGitPullRequestEventType(): GitPullRequestEventTypeEnum {
        return this.gitPullRequestEventDomainService.getRepositoryService().getGitPullRequestEventType();
    }
}