import type { Prisma, Comment, Post } from '@prisma/client';

import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<
  Prisma.CommentCreateArgs | Prisma.UserCreateArgs
>({
  user: {
    firstModerator: {
      data: {
        id: 1,
        email: 'jane@moderator.com',
        roles: 'moderator',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    secondModerator: {
      data: {
        id: 2,
        email: 'john@moderator.com',
        roles: 'moderator',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
  comment: {
    jane: {
      data: {
        name: 'Jane Doe',
        body: 'I like trees',
        post: {
          create: {
            title: 'Redwood Leaves',
            body: 'The quick brown fox jumped over the lazy dog.',
            userId: 1,
          },
        },
      },
    },
    john: {
      data: {
        name: 'John Doe',
        body: 'Hug a tree today',
        post: {
          create: {
            title: 'Root Systems',
            body: 'The five boxing wizards jump quickly.',
            userId: 2,
          },
        },
      },
    },
  },
});

export const postOnly = defineScenario<
  Prisma.PostCreateArgs | Prisma.UserCreateArgs
>({
  user: {
    firstModerator: {
      data: {
        id: 1,
        email: 'jane@moderator.com',
        roles: 'moderator',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: "A tree's bark is worse than its bite",
        userId: 1,
      },
    },
  },
});

export type StandardScenario = ScenarioData<Comment, 'comment'>;
export type PostOnlyScenario = ScenarioData<Post, 'post'>;
