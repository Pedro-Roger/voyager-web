import { render, screen } from '@testing-library/react';
import { ManagementPage } from './management-page';

describe('ManagementPage', () => {
  it('renders the Stitch management layout contract', () => {
    render(<ManagementPage
      title="Municípios"
      description="Gerencie os municípios acompanhados."
      primaryAction={{ label: 'Novo município', href: '/municipios/novo' }}
      searchPlaceholder="Buscar município..."
      filters={['Todos os estados', 'Todos os status']}
      columns={[{ key: 'name', label: 'Município' }, { key: 'status', label: 'Status' }]}
      rows={[{ id: '1', name: 'Fortaleza', status: 'Ativo' }]}
    />);

    expect(screen.getByRole('heading', { name: 'Municípios' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Novo município' })).toHaveAttribute('href', '/municipios/novo');
    expect(screen.getByPlaceholderText('Buscar município...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Todos os estados' })).toBeInTheDocument();
    expect(screen.getByText('Fortaleza')).toBeInTheDocument();
    expect(screen.getByText('Ativo')).toBeInTheDocument();
  });
});
