import { render, screen } from '@testing-library/react';
import { DashboardOverview } from './dashboard-overview';

describe('DashboardOverview', () => {
  it('shows metric labels and values', () => {
    render(
      <DashboardOverview
        cards={[
          { label: 'Atividades em curso', value: '12' },
          { label: 'Pendências críticas', value: '4' },
        ]}
      />,
    );

    expect(screen.getByText('Atividades em curso')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('Pendências críticas')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });
});
