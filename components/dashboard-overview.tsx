const metrics = [
  ['Convênios ativos', '142', 'neutral'], ['Recursos bloqueados', 'R$ 2,4 mi', 'neutral'],
  ['Pendências abertas', '28', 'warning'], ['Pendências críticas', '4', 'danger'],
];
const activities = [['Convênio AC-2024-89 executado', 'há 10 min'], ['Pendência crítica sinalizada', 'há 1 hora'], ['Recursos liberados para medição', 'há 3 horas']];
const priorities = [['ISS-982', 'Documentação de conformidade incompleta', 'Bloqueada'], ['ISS-884', 'Divergência no relatório de execução', 'Em análise'], ['ISS-871', 'Renovação contratual aguardando assinatura', 'Atenção']];

export function DashboardOverview() {
  return <section aria-label="Visão geral operacional" className="dashboard">
    <header className="dashboard-header"><div><p className="eyebrow">CENTRAL DE OPERAÇÕES</p><h1>Visão geral</h1><p>Acompanhe convênios, recursos e pendências que exigem ação.</p></div><div className="dashboard-actions"><button aria-label="Últimos 30 dias" type="button"><span aria-hidden="true">▣ </span>Últimos 30 dias</button><button aria-label="Filtrar" type="button"><span aria-hidden="true">≡ </span>Filtrar</button></div></header>
    <div className="metric-grid">{metrics.map(([label, value, tone]) => <article className={`metric-card ${tone}`} key={label}><div><span>{label}</span><i aria-hidden="true">↗</i></div><strong>{value}</strong></article>)}</div>
    <div className="dashboard-grid">
      <article className="panel activity-panel"><header><h2>Atividade recente</h2><button aria-label="Mais opções" type="button">•••</button></header><ul>{activities.map(([title, time], index) => <li key={title}><span className={`activity-dot dot-${index}`} /><div><strong>{title}</strong><small>{time}</small></div></li>)}</ul></article>
      <article className="panel priority-panel"><header><h2>Prioridades</h2><a href="#">Ver todas</a></header><div className="table-wrap"><table><thead><tr><th>ID</th><th>Descrição</th><th>Status</th><th><span className="sr-only">Ações</span></th></tr></thead><tbody>{priorities.map(([id, description, status]) => <tr key={id}><td>{id}</td><td>{description}</td><td><span className={`status status-${status.toLowerCase().replace(' ', '-')}`}>{status}</span></td><td>•••</td></tr>)}</tbody></table></div></article>
    </div>
    <footer className="app-footer"><span>© 2026 Voyager. Observação que vira ação.</span><span>Privacidade · Termos · API</span></footer>
  </section>;
}
