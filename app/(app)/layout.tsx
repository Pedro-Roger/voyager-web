import { ReactNode } from 'react';
import { AppShell } from '../../components/app-shell';

type PrivateLayoutProps = {
  children: ReactNode;
};

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return <AppShell>{children}</AppShell>;
}
