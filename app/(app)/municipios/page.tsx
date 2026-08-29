import { ManagementPage } from '../../../components/management-page';

export default function MunicipalitiesPage() {
  return <ManagementPage title="Municípios" description="Gerencie territórios, responsáveis e unidades vinculadas." primaryAction={{ label: 'Novo município', href: '/municipios/novo' }} searchPlaceholder="Buscar município..." filters={['Todos os estados', 'Todos os status']} columns={[{ key: 'name', label: 'Município' }, { key: 'state', label: 'UF' }, { key: 'units', label: 'Unidades' }, { key: 'manager', label: 'Responsável' }, { key: 'status', label: 'Status' }]} rows={[
    { id: 'fortaleza', name: 'Fortaleza', state: 'CE', units: '12', manager: 'Mariana Alves', status: 'Ativo' },
    { id: 'sobral', name: 'Sobral', state: 'CE', units: '5', manager: 'Lucas Mendes', status: 'Ativo' },
    { id: 'caucaia', name: 'Caucaia', state: 'CE', units: '4', manager: 'Rafael Costa', status: 'Atenção' },
    { id: 'maracanau', name: 'Maracanaú', state: 'CE', units: '3', manager: 'Ana Lima', status: 'Inativo' },
  ]} />;
}
