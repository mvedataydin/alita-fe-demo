import React from 'react';
import { render } from '@testing-library/react';
import Career from '../pages/Career';

describe('Career', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Career />);
    expect(getByText('My Projects')).toBeInTheDocument();
  });
});