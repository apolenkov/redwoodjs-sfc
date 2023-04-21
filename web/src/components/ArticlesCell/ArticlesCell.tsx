import type { FindArticlesQuery } from 'types/graphql';

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import Article from 'src/components/Article';

export const QUERY = gql`
  query FindArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
      user {
        id
        name
        email
        roles
      }
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div>Error: {error?.message}</div>
);

export const Success = ({ articles }: CellSuccessProps<FindArticlesQuery>) => {
  return (
    <div className="space-y-10">
      {articles.map((article) => (
        <Article article={article} key={article.id} summary={true} />
      ))}
    </div>
  );
};
