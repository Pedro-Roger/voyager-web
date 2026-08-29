import { ManagementPage } from '../../../components/management-page';

export default function UnitsPage() {
  return <ManagementPage title="Unidades" description="Acompanhe unidades executoras e sua situação operacional." primaryAction={{ label: 'Nova unidade', href: '/unidades/nova' }} searchPlaceholder="Buscar unidade..." filters={['Todos os municípios', 'Todos os tipos', 'Todos os status']} columns={[{ key: 'name', label: 'Unidade' }, { key: 'municipality', label: 'Município' }, { key: 'type', label: 'Tipo' }, { key: 'agreements', label: 'Convênios' }, { key: 'status', label: 'Status' }]} rows={[
    { id: 'saude', name: 'Secretaria de Saúde', municipality: 'Fortaleza', type: 'Secretaria', agreements: '8', status: 'Operacional' },
    { id: 'educacao', name: 'Secretaria de Educação', municipality: 'Sobral', type: 'Secretaria', agreements: '5', status: 'Operacional' },
    { id: 'hospital', name: 'Hospital Municipal Norte', municipality: 'Fortaleza', type: 'Equipamento', agreements: '3', status: 'Atenção' },
    { id: 'infra', name: 'Unidade de Infraestrutura', municipality: 'Caucaia', type: 'Autarquia', agreements: '2', status: 'Inativo' },
  ]} />;
}
