import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

describe('HomePage', () => {
  it('renders Voyager observer summary', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { name: 'Voyager' })).toBeInTheDocument();
    expect(
      screen.getByText('Observador operacional para coordenação, contexto e ação.'),
    ).toBeInTheDocument();
  });
});
