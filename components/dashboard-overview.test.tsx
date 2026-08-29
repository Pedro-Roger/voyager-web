import { render, screen } from '@testing-library/react';
import { DashboardOverview } from './dashboard-overview';

describe('DashboardOverview', () => {
  it('shows the complete operational overview', () => {
    render(<DashboardOverview />);

    expect(screen.getByRole('heading', { name: 'Visão geral' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Últimos 30 dias' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Filtrar' })).toBeInTheDocument();
    expect(screen.getByText('Convênios ativos')).toBeInTheDocument();
    expect(screen.getByText('142')).toBeInTheDocument();
    expect(screen.getByText('Pendências abertas')).toBeInTheDocument();
    expect(screen.getByText('28')).toBeInTheDocument();
    expect(screen.getByText('Pendências críticas')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('Atividade recente')).toBeInTheDocument();
    expect(screen.getByText('Prioridades')).toBeInTheDocument();
    expect(screen.getByText('Documentação de conformidade incompleta')).toBeInTheDocument();
    expect(screen.getByText('Bloqueada')).toBeInTheDocument();
  });
});
