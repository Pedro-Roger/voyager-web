import { ManagementPage } from '../../../components/management-page';

export default function AgreementsPage() {
  return <ManagementPage title="Convênios" description="Consulte instrumentos, objetos, vigência e execução financeira." primaryAction={{ label: 'Novo convênio', href: '/convenios/novo' }} searchPlaceholder="Buscar convênio..." filters={['Todos os municípios', 'Todos os status', 'Todas as vigências']} columns={[{ key: 'number', label: 'Número' }, { key: 'object', label: 'Objeto / descrição' }, { key: 'municipality', label: 'Município' }, { key: 'validity', label: 'Vigência' }, { key: 'value', label: 'Valor' }, { key: 'status', label: 'Status' }]} rows={[
    { id: 'ag-2024-81', number: 'AG-2024-81', object: 'Alpha Central Expansion', municipality: 'Fortaleza', validity: '31/12/2026', value: 'R$ 2,8 mi', status: 'Ativo' },
    { id: 'ag-2024-62', number: 'AG-2024-62', object: 'Community Center Renovation', municipality: 'Sobral', validity: '30/09/2026', value: 'R$ 980 mil', status: 'Atenção' },
    { id: 'ag-2023-89', number: 'AG-2023-89', object: 'Public Park Maintenance Contract', municipality: 'Caucaia', validity: '15/11/2026', value: 'R$ 640 mil', status: 'Ativo' },
  ]} />;
}
