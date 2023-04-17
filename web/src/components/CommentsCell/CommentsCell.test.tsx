import { screen, render } from '@redwoodjs/testing/web';

import { standard as standardPost } from '../ArticleCell/ArticleCell.mock';

import { Loading, Empty, Failure, Success } from './CommentsCell';
import { standard } from './CommentsCell.mock';

describe('CommentsCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />);
    }).not.toThrow();
  });

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />);
      expect(screen.getByText('No comments yet')).toBeInTheDocument();
    }).not.toThrow();
  });

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />);
    }).not.toThrow();
  });

  it('renders Success successfully', async () => {
    expect(() => {
      const { article } = standardPost();
      const comments = standard({ postId: article.id }).comments;
      render(<Success comments={comments} />);

      comments.forEach((comment) => {
        expect(screen.getByText(comment.body)).toBeInTheDocument();
      });
    }).not.toThrow();
  });
});
