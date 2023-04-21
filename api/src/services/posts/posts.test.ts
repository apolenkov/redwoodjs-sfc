import { hashPassword } from '@redwoodjs/auth-dbauth-api';

import { posts, post } from './posts';
import type { StandardScenario } from './posts.scenarios';

describe('posts', () => {
  const [hashedPassword, salt] = hashPassword('moderator');
  const USER = {
    hashedPassword: hashedPassword,
    salt: salt,
    roles: 'moderator',
    id: 1,
    email: 'moderator@moderator.com',
  };

  scenario('returns all posts', async (scenario: StandardScenario) => {
    mockCurrentUser(USER);

    const result = await posts();

    expect(result.length).toEqual(Object.keys(scenario.post).length);
  });

  scenario('returns a single post', async (scenario: StandardScenario) => {
    mockCurrentUser(USER);

    const result = await post({ id: scenario.post.one.id });

    expect(result).toEqual(scenario.post.one);
  });
});
