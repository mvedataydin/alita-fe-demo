import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/Card';

describe('Card', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Card title='Test Card' description='This is a test card.' demoLink='#' repoLink='#' />);
    expect(getByText('Test Card')).toBeInTheDocument();
  });

  it('logs title when clicked', () => {
    console.log = jest.fn();
    const { getByText } = render(<Card title='Test Card' description='This is a test card.' demoLink='#' repoLink='#' />);
    getByText('Test Card').click();
    expect(console.log).toHaveBeenCalledWith('You clicked on Test Card');
  });
});