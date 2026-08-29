import { ReactNode } from 'react';

export type ManagementColumn = { key: string; label: string };
export type ManagementRow = { id: string; [key: string]: ReactNode };

type ManagementPageProps = {
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  searchPlaceholder: string;
  filters: string[];
  columns: ManagementColumn[];
  rows: ManagementRow[];
};

const badgeValues = new Set(['Ativo', 'Inativo', 'Operacional', 'Atenção', 'Bloqueada', 'Em análise', 'Pendente', 'Conforme', 'Incompleto']);

export function ManagementPage(props: ManagementPageProps) {
  return <section className="management-page">
    <header className="management-header"><div><p className="eyebrow">GESTÃO OPERACIONAL</p><h1>{props.title}</h1><p>{props.description}</p></div><a aria-label={props.primaryAction.label} className="primary-action" href={props.primaryAction.href}><span aria-hidden="true">+ </span>{props.primaryAction.label}</a></header>
    <div className="management-toolbar"><label className="search-field"><span aria-hidden="true">⌕</span><input placeholder={props.searchPlaceholder} type="search" /></label><div className="filter-group">{props.filters.map((filter) => <button key={filter} type="button">{filter}<span aria-hidden="true">⌄</span></button>)}</div></div>
    <div className="management-table-wrap"><table className="management-table"><thead><tr>{props.columns.map((column) => <th key={column.key}>{column.label}</th>)}<th><span className="sr-only">Ações</span></th></tr></thead><tbody>{props.rows.map((row) => <tr key={row.id}>{props.columns.map((column) => { const value = row[column.key]; return <td key={column.key}>{typeof value === 'string' && badgeValues.has(value) ? <span className={`status status-${value.toLowerCase().replace(' ', '-')}`}>{value}</span> : value}</td>; })}<td><button aria-label={`Ações de ${row.id}`} className="row-actions" type="button">•••</button></td></tr>)}</tbody></table></div>
    <footer className="table-footer">Mostrando {props.rows.length} registros</footer>
  </section>;
}
