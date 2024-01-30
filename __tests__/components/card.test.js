import React from 'react';
import { render } from '@testing-library/react';

import Card from "../../components/Card/Card"

import '@testing-library/jest-dom'

describe('Card Component', () => {
  it('renders without crashing', () => {
    render(<Card />);
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <Card>
        <div>Child Component</div>
      </Card>
    );
    expect(getByText('Child Component')).toBeInTheDocument();
  });

  it('applies styles correctly', () => {
    const { container } = render(<Card />);
    expect(container.firstChild).toHaveClass('card');
  });
});
