import type { QueryResolvers } from 'types/graphql';

import { db } from 'src/lib/db';

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany();
};

// export const User: UserRelationResolvers = {
//   posts: (_obj, { root }) => {
//     return db.user.findUnique({ where: { id: root?.id } }).posts();
//   },
// };
