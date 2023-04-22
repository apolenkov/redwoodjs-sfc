import { render } from '@redwoodjs/testing/web';

import CommentForm from './CommentForm';

describe('CommentForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentForm postId={1} />);
    }).not.toThrow();
  });
});
