## API Report File for "@backstage/plugin-git-release-manager"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiRef } from '@backstage/core-plugin-api';
import { BackstagePlugin } from '@backstage/core-plugin-api';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';
import { ReactNode } from 'react';
import { RouteRef } from '@backstage/core-plugin-api';

// Warning: (ae-missing-release-tag) "A_CALVER_VERSION" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const A_CALVER_VERSION = '2020.01.01_1';

// Warning: (ae-missing-release-tag) "A_SEMVER_VERSION" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const A_SEMVER_VERSION = '1.2.3';

// Warning: (ae-missing-release-tag) "calverRegexp" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const calverRegexp: RegExp;

// Warning: (ae-forgotten-export) The symbol "GetBranchResult" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "createMockBranch" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
const createMockBranch: ({
  ...rest
}?: Partial<GetBranchResult>) => GetBranchResult['branch'];

// Warning: (ae-forgotten-export) The symbol "GetCommitResult" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "createMockCommit" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const createMockCommit: (
  overrides: Partial<GetCommitResult['commit']>,
) => GetCommitResult;

// Warning: (ae-forgotten-export) The symbol "GetRecentCommitsResultSingle" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "createMockRecentCommit" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
const createMockRecentCommit: ({
  ...rest
}: Partial<GetRecentCommitsResultSingle>) => GetRecentCommitsResultSingle;

// Warning: (ae-forgotten-export) The symbol "GetLatestReleaseResult" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "createMockRelease" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
const createMockRelease: ({
  id,
  prerelease,
  ...rest
}?: Partial<
  NonNullable<GetLatestReleaseResult['latestRelease']>
>) => NonNullable<GetLatestReleaseResult['latestRelease']>;

// Warning: (ae-forgotten-export) The symbol "GetTagResult" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "createMockTag" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const createMockTag: (overrides: Partial<GetTagResult['tag']>) => GetTagResult;

// Warning: (ae-forgotten-export) The symbol "DifferProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "Differ" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const Differ: ({ current, next, icon }: DifferProps) => JSX.Element;

// Warning: (ae-missing-release-tag) "DISABLE_CACHE" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const DISABLE_CACHE: {
  readonly headers: {
    readonly 'If-None-Match': '';
  };
};

// Warning: (ae-missing-release-tag) "Divider" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const Divider: () => JSX.Element;

// Warning: (ae-forgotten-export) The symbol "SemverTagParts" needs to be exported by the entry point index.d.ts
//
// @public
function getBumpedSemverTagParts(
  tagParts: SemverTagParts,
  semverBumpLevel: keyof typeof SEMVER_PARTS,
): {
  bumpedTagParts: {
    prefix: string;
    major: number;
    minor: number;
    patch: number;
  };
};

// @public
function getBumpedTag(options: {
  project: Project;
  tag: string;
  bumpLevel: keyof typeof SEMVER_PARTS;
}):
  | {
      bumpedTag: string;
      tagParts: CalverTagParts;
      error: undefined;
    }
  | {
      bumpedTag: string;
      tagParts: {
        prefix: string;
        major: number;
        minor: number;
        patch: number;
      };
      error: undefined;
    }
  | {
      error: AlertError;
    };

// Warning: (ae-missing-release-tag) "getCalverTagParts" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function getCalverTagParts(tag: string):
  | {
      error: AlertError;
      tagParts?: undefined;
    }
  | {
      tagParts: CalverTagParts;
      error?: undefined;
    };

// Warning: (ae-missing-release-tag) "getSemverTagParts" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function getSemverTagParts(tag: string):
  | {
      error: AlertError;
      tagParts?: undefined;
    }
  | {
      tagParts: SemverTagParts;
      error?: undefined;
    };

// Warning: (ae-missing-release-tag) "getShortCommitHash" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function getShortCommitHash(hash: string): string;

// @public
function getTagParts(options: { project: Project; tag: string }):
  | {
      error: AlertError;
      tagParts?: undefined;
    }
  | {
      tagParts: CalverTagParts;
      error?: undefined;
    }
  | {
      tagParts: SemverTagParts;
      error?: undefined;
    };

// Warning: (ae-forgotten-export) The symbol "GitReleaseApi" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "gitReleaseManagerApiRef" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const gitReleaseManagerApiRef: ApiRef<GitReleaseApi>;

// Warning: (ae-forgotten-export) The symbol "GitReleaseManager" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "GitReleaseManagerPage" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const GitReleaseManagerPage: GitReleaseManager;

// Warning: (ae-missing-release-tag) "gitReleaseManagerPlugin" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const gitReleaseManagerPlugin: BackstagePlugin<
  {
    root: RouteRef<undefined>;
  },
  {},
  {}
>;

// @public (undocumented)
const InfoCardPlus: (props: { children?: React_2.ReactNode }) => JSX.Element;

// Warning: (ae-missing-release-tag) "internals" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const internals: {
  components: typeof components;
  constants: typeof constants;
  helpers: typeof helpers;
  testHelpers: typeof testHelpers;
};

// Warning: (ae-missing-release-tag) "isCalverTagParts" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function isCalverTagParts(
  project: Project,
  _tagParts: unknown,
): _tagParts is CalverTagParts;

// Warning: (ae-missing-release-tag) "isProjectValid" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function isProjectValid(project: any): project is Project;

// Warning: (ae-missing-release-tag) "LinearProgressWithLabel" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function LinearProgressWithLabel(props: {
  progress: number;
  responseSteps: ResponseStep[];
}): JSX.Element;

// Warning: (ae-missing-release-tag) "MOCK_RELEASE_BRANCH_NAME_CALVER" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const MOCK_RELEASE_BRANCH_NAME_CALVER: string;

// Warning: (ae-missing-release-tag) "MOCK_RELEASE_BRANCH_NAME_SEMVER" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const MOCK_RELEASE_BRANCH_NAME_SEMVER: string;

// Warning: (ae-missing-release-tag) "MOCK_RELEASE_CANDIDATE_TAG_NAME_CALVER" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const MOCK_RELEASE_CANDIDATE_TAG_NAME_CALVER: string;

// Warning: (ae-missing-release-tag) "MOCK_RELEASE_CANDIDATE_TAG_NAME_SEMVER" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const MOCK_RELEASE_CANDIDATE_TAG_NAME_SEMVER: string;

// Warning: (ae-missing-release-tag) "MOCK_RELEASE_NAME_CALVER" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const MOCK_RELEASE_NAME_CALVER: string;

// Warning: (ae-missing-release-tag) "MOCK_RELEASE_NAME_SEMVER" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const MOCK_RELEASE_NAME_SEMVER: string;

// Warning: (ae-missing-release-tag) "MOCK_RELEASE_VERSION_TAG_NAME_CALVER" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const MOCK_RELEASE_VERSION_TAG_NAME_CALVER: string;

// Warning: (ae-missing-release-tag) "MOCK_RELEASE_VERSION_TAG_NAME_SEMVER" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const MOCK_RELEASE_VERSION_TAG_NAME_SEMVER: string;

// Warning: (ae-missing-release-tag) "mockBumpedTag" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockBumpedTag = 'rc-2020.01.01_1337';

// Warning: (ae-missing-release-tag) "mockCalverProject" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockCalverProject: Project;

// Warning: (ae-missing-release-tag) "mockCtaMessage" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockCtaMessage = 'Patch Release Candidate';

// Warning: (ae-missing-release-tag) "mockDefaultBranch" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockDefaultBranch = 'mock_defaultBranch';

// Warning: (ae-missing-release-tag) "mockEmail" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockEmail = 'mock_email';

// Warning: (ae-forgotten-export) The symbol "getReleaseCandidateGitInfo" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "mockNextGitInfoCalver" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockNextGitInfoCalver: ReturnType<typeof getReleaseCandidateGitInfo>;

// Warning: (ae-missing-release-tag) "mockNextGitInfoSemver" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockNextGitInfoSemver: ReturnType<typeof getReleaseCandidateGitInfo>;

// Warning: (ae-missing-release-tag) "mockOwner" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockOwner = 'mock_owner';

// Warning: (ae-missing-release-tag) "mockReleaseBranch" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockReleaseBranch: {
  name: string;
  links: {
    html: string;
  };
  commit: {
    sha: string;
    commit: {
      tree: {
        sha: string;
      };
    };
  };
};

// Warning: (ae-missing-release-tag) "mockReleaseCandidateCalver" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockReleaseCandidateCalver: {
  targetCommitish: string;
  tagName: string;
  prerelease: boolean;
  id: number;
  htmlUrl: string;
  body?: string | null | undefined;
};

// Warning: (ae-missing-release-tag) "mockReleaseCandidateSemver" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockReleaseCandidateSemver: {
  targetCommitish: string;
  tagName: string;
  prerelease: boolean;
  id: number;
  htmlUrl: string;
  body?: string | null | undefined;
};

// Warning: (ae-forgotten-export) The symbol "ReleaseStats" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "mockReleaseStats" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockReleaseStats: ReleaseStats;

// Warning: (ae-missing-release-tag) "mockReleaseVersionCalver" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockReleaseVersionCalver: {
  targetCommitish: string;
  tagName: string;
  prerelease: boolean;
  id: number;
  htmlUrl: string;
  body?: string | null | undefined;
};

// Warning: (ae-missing-release-tag) "mockReleaseVersionSemver" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockReleaseVersionSemver: {
  targetCommitish: string;
  tagName: string;
  prerelease: boolean;
  id: number;
  htmlUrl: string;
  body?: string | null | undefined;
};

// Warning: (ae-missing-release-tag) "mockRepo" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockRepo = 'mock_repo';

// Warning: (ae-missing-release-tag) "mockSearchCalver" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockSearchCalver: string;

// Warning: (ae-missing-release-tag) "mockSearchSemver" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockSearchSemver: string;

// Warning: (ae-missing-release-tag) "mockSelectedPatchCommit" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockSelectedPatchCommit: {
  htmlUrl: string;
  sha: string;
  author: {
    htmlUrl?: string | undefined;
    login?: string | undefined;
  };
  commit: {
    message: string;
  };
  firstParentSha?: string | undefined;
};

// Warning: (ae-missing-release-tag) "mockSemverProject" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockSemverProject: Project;

// Warning: (ae-missing-release-tag) "mockTagParts" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockTagParts: CalverTagParts;

// Warning: (ae-missing-release-tag) "mockUser" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockUser: {
  username: string;
  email: string;
};

// Warning: (ae-missing-release-tag) "mockUsername" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const mockUsername = 'mock_username';

// Warning: (ae-missing-release-tag) "NoLatestRelease" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const NoLatestRelease: () => JSX.Element;

// Warning: (ae-forgotten-export) The symbol "DialogProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "ResponseStepDialog" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const ResponseStepDialog: ({
  progress,
  responseSteps,
  title,
}: DialogProps) => JSX.Element;

// Warning: (ae-forgotten-export) The symbol "ResponseStepListProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "ResponseStepList" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const ResponseStepList: ({
  responseSteps,
  animationDelay,
  loading,
  denseList,
  children,
}: PropsWithChildren<ResponseStepListProps>) => JSX.Element;

// Warning: (ae-forgotten-export) The symbol "ResponseStepListItemProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "ResponseStepListItem" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const ResponseStepListItem: ({
  responseStep,
  animationDelay,
}: ResponseStepListItemProps) => JSX.Element;

// Warning: (ae-missing-release-tag) "SEMVER_PARTS" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const SEMVER_PARTS: {
  major: 'major';
  minor: 'minor';
  patch: 'patch';
};

// Warning: (ae-missing-release-tag) "semverRegexp" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const semverRegexp: RegExp;

declare namespace stats {
  export { mockReleaseStats };
}

// Warning: (ae-missing-release-tag) "TAG_OBJECT_MESSAGE" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const TAG_OBJECT_MESSAGE =
  'Tag generated by your friendly neighborhood Backstage Release Manager';

// Warning: (ae-missing-release-tag) "TEST_IDS" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const TEST_IDS: {
  info: {
    info: string;
    infoFeaturePlus: string;
  };
  createRc: {
    cta: string;
    semverSelect: string;
  };
  promoteRc: {
    mockedPromoteRcBody: string;
    notRcWarning: string;
    promoteRc: string;
    cta: string;
  };
  patch: {
    error: string;
    loading: string;
    notPrerelease: string;
    body: string;
  };
  form: {
    owner: {
      loading: string;
      select: string;
      error: string;
      empty: string;
    };
    repo: {
      loading: string;
      select: string;
      error: string;
      empty: string;
    };
    versioningStrategy: {
      radioGroup: string;
    };
  };
  components: {
    divider: string;
    noLatestRelease: string;
    circularProgress: string;
    responseStepListDialogContent: string;
    responseStepListItem: string;
    responseStepListItemIconSuccess: string;
    responseStepListItemIconFailure: string;
    responseStepListItemIconLink: string;
    responseStepListItemIconDefault: string;
    differ: {
      current: string;
      next: string;
      icons: {
        tag: string;
        branch: string;
        github: string;
        slack: string;
        versioning: string;
      };
    };
    linearProgressWithLabel: string;
  };
};

declare namespace testHelpers_2 {
  export {
    mockUsername,
    mockEmail,
    mockOwner,
    mockRepo,
    A_CALVER_VERSION,
    MOCK_RELEASE_NAME_CALVER,
    MOCK_RELEASE_BRANCH_NAME_CALVER,
    MOCK_RELEASE_CANDIDATE_TAG_NAME_CALVER,
    MOCK_RELEASE_VERSION_TAG_NAME_CALVER,
    A_SEMVER_VERSION,
    MOCK_RELEASE_NAME_SEMVER,
    MOCK_RELEASE_BRANCH_NAME_SEMVER,
    MOCK_RELEASE_CANDIDATE_TAG_NAME_SEMVER,
    MOCK_RELEASE_VERSION_TAG_NAME_SEMVER,
    createMockTag,
    createMockCommit,
    mockUser,
    mockSemverProject,
    mockCalverProject,
    mockSearchCalver,
    mockSearchSemver,
    mockDefaultBranch,
    mockNextGitInfoSemver,
    mockNextGitInfoCalver,
    mockTagParts,
    mockCtaMessage,
    mockBumpedTag,
    createMockRelease,
    mockReleaseCandidateCalver,
    mockReleaseVersionCalver,
    mockReleaseCandidateSemver,
    mockReleaseVersionSemver,
    createMockBranch,
    mockReleaseBranch,
    createMockRecentCommit,
    mockSelectedPatchCommit,
  };
}

declare namespace testIds {
  export { TEST_IDS };
}

// @public (undocumented)
const validateTagName: (options: { project: Project; tagName?: string }) =>
  | {
      tagNameError: null;
    }
  | {
      tagNameError: AlertError | undefined;
    };

// Warning: (ae-missing-release-tag) "VERSIONING_STRATEGIES" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const VERSIONING_STRATEGIES: {
  semver: 'semver';
  calver: 'calver';
};

// Warnings were encountered during analysis:
//
// src/components/ResponseStepDialog/LinearProgressWithLabel.d.ts:5:5 - (ae-forgotten-export) The symbol "ResponseStep" needs to be exported by the entry point index.d.ts
// src/helpers/getBumpedTag.d.ts:16:5 - (ae-forgotten-export) The symbol "Project" needs to be exported by the entry point index.d.ts
// src/helpers/getBumpedTag.d.ts:21:5 - (ae-forgotten-export) The symbol "CalverTagParts" needs to be exported by the entry point index.d.ts
// src/helpers/getBumpedTag.d.ts:33:5 - (ae-forgotten-export) The symbol "AlertError" needs to be exported by the entry point index.d.ts
// src/index.d.ts:9:5 - (ae-forgotten-export) The symbol "components" needs to be exported by the entry point index.d.ts
// src/index.d.ts:10:5 - (ae-forgotten-export) The symbol "constants" needs to be exported by the entry point index.d.ts
// src/index.d.ts:11:5 - (ae-forgotten-export) The symbol "helpers" needs to be exported by the entry point index.d.ts
// src/index.d.ts:12:5 - (ae-forgotten-export) The symbol "testHelpers" needs to be exported by the entry point index.d.ts
```