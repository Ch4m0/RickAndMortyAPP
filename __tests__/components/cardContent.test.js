import React from 'react';
import { render } from '@testing-library/react';
import CardContent from '../../components/Card/CardContent/CardContent';


import '@testing-library/jest-dom';

describe('CardContent Component', () => {
  it('renders without crashing', () => {
    render(<CardContent />);
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <CardContent>
        Content Text
      </CardContent>
    );
    expect(getByText('Content Text')).toBeInTheDocument();
  });

  it('applies styles correctly', () => {
    const { container } = render(<CardContent />);
    expect(container.firstChild).toHaveClass('cardContent');
  });
});
