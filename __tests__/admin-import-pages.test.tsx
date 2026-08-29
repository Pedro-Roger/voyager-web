import { render, screen } from '@testing-library/react';
import ImportUploadPage from '../app/(app)/importar/page';
import ImportReviewPage from '../app/(app)/importar/revisao/page';
import ImportMappingPage from '../app/(app)/importar/mapeamento/page';
import ImportSuccessPage from '../app/(app)/importar/sucesso/page';
import UsersPage from '../app/(app)/usuarios/page';
import PermissionsPage from '../app/(app)/permissoes/page';
import UserDetailPage from '../app/(app)/usuarios/eleanor-vance/page';

describe('Stitch administration and import pages', () => {
  it('renders all import steps', () => {
    render(<ImportUploadPage />);
    expect(screen.getByRole('heading', { name: 'Importar dados' })).toBeInTheDocument();
    expect(screen.getByText('Solte seu arquivo aqui')).toBeInTheDocument();

    render(<ImportReviewPage />);
    expect(screen.getByRole('heading', { name: 'Revisar dados importados' })).toBeInTheDocument();
    expect(screen.getByText('João Pereira')).toBeInTheDocument();

    render(<ImportMappingPage />);
    expect(screen.getByRole('heading', { name: 'Mapear colunas' })).toBeInTheDocument();
    expect(screen.getByLabelText('Coluna Nome')).toBeInTheDocument();

    render(<ImportSuccessPage />);
    expect(screen.getByRole('heading', { name: 'Importação concluída' })).toBeInTheDocument();
    expect(screen.getByText('1.248 registros')).toBeInTheDocument();
  });

  it('renders user administration', () => {
    render(<UsersPage />);
    expect(screen.getByRole('heading', { name: 'Usuários' })).toBeInTheDocument();
    expect(screen.getByText('Eleanor Vance')).toBeInTheDocument();

    render(<PermissionsPage />);
    expect(screen.getByRole('heading', { name: 'Papéis e permissões' })).toBeInTheDocument();
    expect(screen.getAllByText('Administrador').length).toBeGreaterThan(0);
    expect(screen.getByText('Gerenciar convênios')).toBeInTheDocument();

    render(<UserDetailPage />);
    expect(screen.getByRole('heading', { name: 'Eleanor Vance' })).toBeInTheDocument();
    expect(screen.getByText('Acesso e permissões')).toBeInTheDocument();
    expect(screen.getByText('Atividade recente')).toBeInTheDocument();
  });
});
