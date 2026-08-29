import { ReactNode } from 'react';

type AppShellProps = {
  children: ReactNode;
};

const navItems = ['Dashboard', 'Atividades', 'Pendências', 'Convênios', 'Documentos'];

export function AppShell({ children }: AppShellProps) {
  return (
    <div>
      <header>
        <strong>Voyager</strong>
        <nav aria-label="Navegação principal">
          <ul>
            {navItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
