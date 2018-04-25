# Frontend QuickStarter

## Overview

This repository will contain the sources for the frontend application quick starters.

This will be a React + Redux + GraphQL application.

## Running

We're using [Yarn](https://yarnpkg.com/en/) and npm packages to manage
dependencies, yarn will be used to invoke the dev server etc.

To start frontend development with webpack-dev-server:

`yarn dev`

To run react storybook:

`yarn run storybook`

## Technology Choices

(To be documented)

## Workflow

We are practising a form of
[trunk-based development](https://trunkbaseddevelopment.com/) with feature
branches merged down to `master` via "pull requests". We basically favour small
short-lived branches per feature or chore where possible, employing a
[branch-per-issue](https://www.atlassian.com/continuous-delivery/continuous-delivery-workflows-with-feature-branching-and-gitflow)
workflow relating the branches to tickets/tasks (these will be JIRA or Trello
items, TBD).

In accordance with this, it's expected that the branch naming for tickets
associated with JIRA user stories or tasks will include the issue identifier in
their name, e.g. `SCR-34_handle_authentication`. The first line of the commit
message should also reference this with a description, e.g.
`SCR-34_handle_authentication`. (This should also be followed by a more detailed
explanation, see
https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message for
inspiration.)

Notes:

* On merge of a user-story based branch as per the above, we would probably
  elect to keep the source branch for a short period of time, as this context
  can be useful. Ideally we'd have aging.
* For chores / small fixes we would just follow `this_naming_convention` without
  an issue reference, and remove the source branch on merge.
* To make others beyond the assignee of the MR aware of the change, you can
  `@username` mention them or the group. It's also possible to assign multiple
  reviewers in Bitbucket. We have Slack notifications informing of pull request
  creation and other events.
* Generally speaking, we **don't push to master** and instead follow the PR
  workflow. There are exceptions, and we won't introduce needless clutter or
  prcess.

## Yarn Lockfile Conflict Resolution

Occasionally, when merging branches, the
[yarn.lock](https://yarnpkg.com/en/docs/yarn-lock) file will run into a merge
conflict error. Due to the nature of the file, you should not be manually
editing the file. Instead, you should resolve any merge conflicts with your
[package.json](https://docs.npmjs.com/files/package.json) file and then rebuild
the yarn file by doing the following:

```bash
$ git rebase origin/master
$ git checkout origin/master -- yarn.lock
$ yarn install
$ git add yarn.lock
$ git rebase --continue
```

This will get the yarn.lock file from the master branch and rebuild it using
your resolved package.json. The origins of this solution can be found
[here](https://github.com/yarnpkg/yarn/issues/1776#issuecomment-269539948).

## Notes on linting, formatting (w/prettier), hooks

We are adopting TSLint to enforce on code styles. Details in `tsconfig.json`
file

#### Hooks

There is `precommit` hook which calls prettier to format and override the staged
files.

`pretest` hook will run `jest test` which is all the test suites under **test**
folder, see [Testing](#testing) for details.

## Testing

If the view is intended to update for snapshot testing, update the snapshops by
running:

```bash
jest -u
```

### Bundle Analyzer

To run the bundle analyzer, use the `package.json` script:

`yarn build:stats`

This will create a new directory ./stats that will contain webpack's
`stats.json` and also the two files generated from electrode-bundle-analyzer
`[bundle.analyze.json, bundle.analyze.tsv]`

The best way to make use of the result is to import the `.tsv` file into a
spreadsheet and sort the Identity Path column. Any duplicate entries there means
you are pulling multiple versions of the same module into your bundle.

## Convert SVG into React Component

To use a SVG icon, first place it under `src/components/Icons`. Then run the
`package.json` script:

`yarn svg`

This will automatically optimize the svg files and create React Components in
.js format. It uses [svgo](https://www.npmjs.com/package/svgo) for svg
optimization and
[svg-to-react-cli](https://www.npmjs.com/package/svg-to-react-cli) to create
React Components in .js format

This requires our webpack loaders to accept .js extension.
