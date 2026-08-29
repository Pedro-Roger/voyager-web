import { ManagementPage } from '../../../components/management-page';

export default function UsersPage() {
  return <ManagementPage title="Usuários" description="Gerencie pessoas, papéis, escopo e estado de acesso." primaryAction={{ label: 'Novo usuário', href: '/usuarios/novo' }} searchPlaceholder="Buscar usuário..." filters={['Todos os papéis', 'Todos os municípios', 'Todos os status']} columns={[{ key: 'name', label: 'Usuário' }, { key: 'email', label: 'E-mail' }, { key: 'role', label: 'Papel' }, { key: 'scope', label: 'Escopo' }, { key: 'status', label: 'Status' }]} rows={[
    { id: 'eleanor-vance', name: <a href="/usuarios/eleanor-vance">Eleanor Vance</a>, email: 'eleanor@voyager.local', role: 'Administrador', scope: 'Todos os municípios', status: 'Ativo' },
    { id: 'mariana-alves', name: 'Mariana Alves', email: 'mariana@voyager.local', role: 'Gestora', scope: 'Fortaleza', status: 'Ativo' },
    { id: 'lucas-mendes', name: 'Lucas Mendes', email: 'lucas@voyager.local', role: 'Analista', scope: 'Sobral', status: 'Ativo' },
    { id: 'rafael-costa', name: 'Rafael Costa', email: 'rafael@voyager.local', role: 'Leitura', scope: 'Caucaia', status: 'Inativo' },
  ]} />;
}
