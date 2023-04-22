import type { Prisma, Post } from '@prisma/client';

import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<
  Prisma.PostCreateArgs | Prisma.UserCreateArgs
>({
  user: {
    moderator: {
      data: {
        id: 1,
        email: 'moderator@moderator.com',
        roles: 'moderator',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
  post: {
    one: (scenario) => ({
      data: {
        title: 'String',
        body: 'String',
        userId: scenario.user.moderator.id,
      },
    }),
    two: (scenario) => ({
      data: {
        title: 'String',
        body: 'String',
        userId: scenario.user.moderator.id,
      },
    }),
  },
});

export type StandardScenario = ScenarioData<Post, 'post'>;
