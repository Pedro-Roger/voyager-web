import { render, screen } from '@testing-library/react';
import DashboardPage from '../app/(app)/dashboard/page';

describe('DashboardPage', () => {
  it('renders operational cards', () => {
    render(<DashboardPage />);

    expect(screen.getByRole('heading', { name: 'Painel operacional' })).toBeInTheDocument();
    expect(screen.getByText('Atividades em curso')).toBeInTheDocument();
    expect(screen.getByText('Pendências críticas')).toBeInTheDocument();
    expect(screen.getByText('Convênios observados')).toBeInTheDocument();
  });
});
