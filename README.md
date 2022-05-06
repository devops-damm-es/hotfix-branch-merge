# Hotfix branch merge

Damm DevOps - Gitflow hotfix branch merge

This action makes the following changes in repository when hotfix branch merge into the default branch (usually main or master) is detected:

- Rename develop branch to feature/xxx
- Create a new branch develop from the default branch (usually main or master)

## Example usage

```yaml
name: 'Damm DevOps - Gitflow hotfix branch merge'
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    name: Execute Gitflow hotfix branch merge
    steps:
      - name: Execute Gitflow hotfix branch merge
        uses: devops-damm-es/hotfix-branch-merge@v1.0.0
```
# Output Variables

## hotfix_branch_merge_success

Boolean output indicating that the repository changes have been made successfully.