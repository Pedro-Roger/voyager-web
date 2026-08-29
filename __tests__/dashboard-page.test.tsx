import { render, screen } from '@testing-library/react';
import DashboardPage from '../app/(app)/dashboard/page';

describe('DashboardPage', () => {
  it('renders the Stitch-based operational dashboard', () => {
    render(<DashboardPage />);

    expect(screen.getByRole('heading', { name: 'Visão geral' })).toBeInTheDocument();
    expect(screen.getByText('Convênios ativos')).toBeInTheDocument();
    expect(screen.getByText('Pendências críticas')).toBeInTheDocument();
    expect(screen.getByText('Prioridades')).toBeInTheDocument();
  });
});
