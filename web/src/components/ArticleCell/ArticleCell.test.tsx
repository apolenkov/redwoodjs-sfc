import { render, screen } from '@redwoodjs/testing';

import { Loading, Empty, Failure, Success } from './ArticleCell';
import { standard } from './ArticleCell.mock';

describe('ArticleCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />);
    }).not.toThrow();
  });

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />);
    }).not.toThrow();
  });

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />);
    }).not.toThrow();
  });

  test('Success renders successfully', async () => {
    const article = standard().article;
    render(<Success article={article} />);

    expect(screen.getByText(article.title)).toBeInTheDocument();
    expect(screen.getByText(article.body)).toBeInTheDocument();
  });
});
