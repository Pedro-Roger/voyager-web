import { render, screen } from '@testing-library/react';
import { AppShell } from '../components/app-shell';

jest.mock('next/navigation', () => ({ usePathname: () => '/municipios' }));

describe('AppShell', () => {
  it('renders the Stitch-inspired application shell', () => {
    render(
      <AppShell>
        <div>Conteudo</div>
      </AppShell>,
    );

    expect(screen.getByText('Voyager Console')).toBeInTheDocument();
    expect(screen.getByText('Observador operacional')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Municípios')).toBeInTheDocument();
    expect(screen.getByText('Municípios').closest('a')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('Dashboard').closest('a')).not.toHaveAttribute('aria-current');
    expect(screen.getByText('Unidades')).toBeInTheDocument();
    expect(screen.getByText('Configurações')).toBeInTheDocument();
    expect(screen.getByText('Suporte')).toBeInTheDocument();
    expect(screen.getByText('Administrador')).toBeInTheDocument();
    expect(screen.getByText('Conteudo')).toBeInTheDocument();
  });
});
