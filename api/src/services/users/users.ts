import type { QueryResolvers } from 'types/graphql';

import { db } from 'src/lib/db';

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany();
};
