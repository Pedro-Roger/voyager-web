import { ManagementPage } from '../../../components/management-page';

export default function DocumentsPage() {
  return <ManagementPage title="Documentos" description="Controle requisitos documentais e conformidade dos convênios." primaryAction={{ label: 'Enviar documento', href: '/documentos/novo' }} searchPlaceholder="Buscar documento..." filters={['Todos os tipos', 'Todos os convênios', 'Todos os status']} columns={[{ key: 'name', label: 'Documento' }, { key: 'agreement', label: 'Convênio' }, { key: 'unit', label: 'Unidade' }, { key: 'updated', label: 'Atualização' }, { key: 'status', label: 'Status' }]} rows={[
    { id: 'work-plan', name: 'Plano de trabalho', agreement: 'AG-2024-81', unit: 'Secretaria de Saúde', updated: '29/08/2026', status: 'Conforme' },
    { id: 'expense-report', name: 'Relatório de execução financeira', agreement: 'AG-2024-62', unit: 'Secretaria de Educação', updated: '28/08/2026', status: 'Incompleto' },
    { id: 'compliance', name: 'Certidão de regularidade', agreement: 'AG-2023-89', unit: 'Unidade de Infraestrutura', updated: '26/08/2026', status: 'Pendente' },
  ]} />;
}
