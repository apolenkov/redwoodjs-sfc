import type { Post } from '@prisma/client';

import { hashPassword } from '@redwoodjs/auth-dbauth-api';

import {
  adminPosts,
  adminPost,
  createPost,
  updatePost,
  deletePost,
} from './adminPosts';
import type { StandardScenario } from './adminPosts.scenarios';

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

    const result = await adminPosts();

    expect(result.length).toEqual(Object.keys(scenario.post).length);
  });

  scenario('returns a single post', async (scenario: StandardScenario) => {
    mockCurrentUser(USER);

    const result = await adminPost({ id: scenario.post.one.id });

    expect(result).toEqual(scenario.post.one);
  });

  scenario('creates a post', async () => {
    mockCurrentUser(USER);

    const result = await createPost({
      input: { title: 'String', body: 'String' },
    });

    expect(result.title).toEqual('String');
    expect(result.body).toEqual('String');
  });

  scenario('updates a post', async (scenario: StandardScenario) => {
    mockCurrentUser(USER);

    const original = (await adminPost({ id: scenario.post.one.id })) as Post;
    const result = await updatePost({
      id: original.id,
      input: { title: 'String2' },
    });

    expect(result.title).toEqual('String2');
  });

  scenario('deletes a post', async (scenario: StandardScenario) => {
    mockCurrentUser(USER);

    const original = (await deletePost({ id: scenario.post.one.id })) as Post;
    const result = await adminPost({ id: original.id });

    expect(result).toEqual(null);
  });
});
