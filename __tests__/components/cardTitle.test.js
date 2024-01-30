import React from 'react';
import { render } from '@testing-library/react';
import CardTitle from '../../components/Card/CardHeader/CardTitle/CardTitle';

import '@testing-library/jest-dom';

describe('CardTitle Component', () => {
  it('renders without crashing', () => {
    render(<CardTitle />);
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <CardTitle>
        Title Content
      </CardTitle>
    );
    expect(getByText('Title Content')).toBeInTheDocument();
  });

  it('applies styles correctly', () => {
    const { container } = render(<CardTitle />);
    expect(container.firstChild).toHaveClass('cardTitle');
  });
});
