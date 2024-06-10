import { render, waitFor } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header Component', () => {
  test('renders header title', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const titleElement = getByText(/My Website/i);

    await waitFor(() => {
      expect(titleElement).toBeInTheDocument();
    });
  });

  test('renders navigation links', async () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const homeLink = getByRole('link', { name: /Home/i });
    const aboutLink = getByRole('link', { name: /About/i });
    const careerLink = getByRole('link', { name: /Career/i });

    await waitFor(() => {
      expect(homeLink).toBeInTheDocument();
      expect(aboutLink).toBeInTheDocument();
      expect(careerLink).toBeInTheDocument();
    });
  });
});
