import { ManagementPage } from '../../../components/management-page';

export default function IssuesPage() {
  return <ManagementPage title="Pendências" description="Priorize bloqueios, responsáveis e prazos de resolução." primaryAction={{ label: 'Nova pendência', href: '/pendencias/nova' }} searchPlaceholder="Buscar pendência..." filters={['Todas as prioridades', 'Todos os status', 'Todos os responsáveis']} columns={[{ key: 'code', label: 'ID' }, { key: 'description', label: 'Descrição' }, { key: 'agreement', label: 'Convênio' }, { key: 'owner', label: 'Responsável' }, { key: 'deadline', label: 'Prazo' }, { key: 'status', label: 'Status' }]} rows={[
    { id: 'iss-982', code: 'ISS-982', description: 'Documentação de conformidade incompleta', agreement: 'AG-2024-81', owner: 'Mariana Alves', deadline: 'Hoje', status: 'Bloqueada' },
    { id: 'iss-884', code: 'ISS-884', description: 'Divergência no relatório de execução', agreement: 'AG-2024-62', owner: 'Lucas Mendes', deadline: '02/09/2026', status: 'Em análise' },
    { id: 'iss-871', code: 'ISS-871', description: 'Renovação contratual aguardando assinatura', agreement: 'AG-2023-89', owner: 'Rafael Costa', deadline: '05/09/2026', status: 'Atenção' },
  ]} />;
}
