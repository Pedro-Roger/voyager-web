import { render, screen } from '@testing-library/react';
import { AppShell } from '../components/app-shell';

describe('AppShell', () => {
  it('renders title and navigation items', () => {
    render(
      <AppShell>
        <div>Conteudo</div>
      </AppShell>,
    );

    expect(screen.getByText('Voyager')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Atividades')).toBeInTheDocument();
    expect(screen.getByText('Pendências')).toBeInTheDocument();
    expect(screen.getByText('Conteudo')).toBeInTheDocument();
  });
});
