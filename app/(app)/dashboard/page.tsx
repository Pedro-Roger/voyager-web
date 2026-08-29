import { DashboardOverview } from '../../../components/dashboard-overview';

const cards = [
  { label: 'Atividades em curso', value: '12' },
  { label: 'Pendências críticas', value: '4' },
  { label: 'Convênios observados', value: '18' },
];

export default function DashboardPage() {
  return (
    <section>
      <h1>Painel operacional</h1>
      <p>Visão rápida do estado atual do observador Voyager.</p>
      <DashboardOverview cards={cards} />
    </section>
  );
}
