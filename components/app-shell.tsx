import { ReactNode } from 'react';

type AppShellProps = { children: ReactNode };

const navItems = [
  ['Dashboard', 'grid', '/dashboard'], ['Municípios', 'pin', '#'], ['Unidades', 'building', '#'],
  ['Convênios', 'handshake', '#'], ['Pendências', 'alert', '#'], ['Documentos', 'file', '#'],
] as const;

function Icon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    building: <><path d="M4 21V5l8-3 8 3v16M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01M2 21h20" /></>,
    handshake: <><path d="m11 17 2 2a2 2 0 0 0 3-3l-3-3M13 13l2 2a2 2 0 1 0 3-3l-4-4a4 4 0 0 0-5 0L8 9a2 2 0 0 1-3-3l3-3M2 14l4 4M18 6l4 4" /></>,
    alert: <><path d="M10.3 2.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8ZM14 2v6h6M8 13h8M8 17h6" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19 15.5 21 17l-4 4-1.5-2a8 8 0 0 1-3.5 1L11 22H7v-2a8 8 0 0 1-3-2L2 19l-2-4 2-1a8 8 0 0 1 0-4L0 9l2-4 2 1a8 8 0 0 1 3-2V2h4l1 2a8 8 0 0 1 3.5 1L17 3l4 4-2 1.5a8 8 0 0 1 0 7Z" /></>,
    support: <><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-2.9 2-2.9 4M12 18h.01" /></>,
  };
  return <svg aria-hidden="true" className="nav-icon" viewBox="0 0 24 24">{paths[name]}</svg>;
}

export function AppShell({ children }: AppShellProps) {
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark">V</span><span><strong>Voyager Console</strong><small>Observador operacional</small></span></div>
      <button className="new-observation" type="button"><span>+</span> Nova observação</button>
      <nav aria-label="Navegação principal" className="sidebar-nav"><ul>{navItems.map(([label, icon, href], index) => <li key={label}><a aria-current={index === 0 ? 'page' : undefined} className={index === 0 ? 'active' : ''} href={href}><Icon name={icon} /><span>{label}</span></a></li>)}</ul></nav>
      <div className="sidebar-bottom"><a href="#"><Icon name="settings" /><span>Configurações</span></a><a href="#"><Icon name="support" /><span>Suporte</span></a><div className="user-card"><span className="avatar">A</span><span><strong>Administrador</strong><small>admin@voyager.local</small></span></div></div>
    </aside>
    <main className="app-main">{children}</main>
  </div>;
}
