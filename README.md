# Hotfix branch merge

Damm DevOps - Gitflow hotfix branch merge

This action makes the following changes in repository when hotfix branch merge into the default branch (usually main or master) is detected:

- Rename develop branch to feature/xxx
- Create a new branch develop from the default branch (usually main or master)

## Example usage

```yaml
name: 'Damm DevOps - Gitflow hotfix branch merge'
on: 
  pull_request:
    types: [closed]
jobs:
  build:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    name: Execute Gitflow hotfix branch merge
    steps:
      - name: Execute Gitflow hotfix branch merge
        uses: devops-damm-es/hotfix-branch-merge@v1.0.0
        with:
          admin_pat_token: ${{ secrets.ADMIN_PAT_TOKEN }}
```
# Input Variables

## admin_pat_token

Admin Personal Access Token

# Output Variables

## is_hotfix_branch_merge

Boolean output indicating that is hotfix branch merge.

## hotfix_branch_merge_success

Boolean output indicating that the repository changes have been made successfully.