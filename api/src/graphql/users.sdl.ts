export const schema = gql`
  type User {
    id: Int!
    name: String
    email: String!
    # we never want to make these publicly available via GraphQL for security!
    #    hashedPassword: String!
    #    salt: String!
    #    resetToken: String
    #    resetTokenExpiresAt: DateTime
    roles: String!
  }

  type Query {
    users: [User!]! @requireAuth
  }

  input CreateUserInput {
    name: String
    email: String!
    roles: String!
  }

  input UpdateUserInput {
    name: String
    email: String
    roles: String
  }
`;
