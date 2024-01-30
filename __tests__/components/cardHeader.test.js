import React from 'react';
import { render } from '@testing-library/react';
import CardHeader from '../../components/Card/CardHeader/CardHeader'

import '@testing-library/jest-dom'

describe('CardHeader Component', () => {
  it('renders without crashing', () => {
    render(<CardHeader />);
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <CardHeader>
        <div>Header Content</div>
      </CardHeader>
    );
    expect(getByText('Header Content')).toBeInTheDocument();
  });

  it('applies styles correctly', () => {
    const { container } = render(<CardHeader />);
    expect(container.firstChild).toHaveClass('cardHeader');
  });
});
