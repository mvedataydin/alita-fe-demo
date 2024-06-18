import React from 'react';
import { render } from '@testing-library/react';
import CardList from '../components/CardList';
import { mockCards } from '../mocks/mockCards';

describe('CardList', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<CardList />);
    mockCards.forEach(card => {
      expect(getByText(card.title)).toBeInTheDocument();
    });
  });

  it('does not render cards that do not match search term', () => {
    // Assuming there's a state and function to update search term
    const searchTerm = 'nonexistent';
    const { queryByText } = render(<CardList searchTerm={searchTerm} />);
    mockCards.forEach(card => {
      if (!card.title.includes(searchTerm)) {
        expect(queryByText(card.title)).not.toBeInTheDocument();
      }
    });
  });
});