import { hashPassword } from '@redwoodjs/auth-dbauth-api';
import { mockRedwoodDirective, getDirectiveName } from '@redwoodjs/testing/api';

import requireAuth from './requireAuth';

describe('requireAuth directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(requireAuth.schema).toBeTruthy();
    expect(getDirectiveName(requireAuth.schema)).toBe('requireAuth');
  });

  it('requireAuth has stub implementation. Should not throw when current user', () => {
    const [hashedPassword, salt] = hashPassword('moderator');
    const USER = {
      hashedPassword: hashedPassword,
      salt: salt,
      roles: 'moderator',
      id: 1,
      email: 'moderator@moderator.com',
    };
    const mockExecution = mockRedwoodDirective(requireAuth, {
      context: {
        currentUser: USER,
      },
    });

    expect(mockExecution).not.toThrowError();
  });
});
