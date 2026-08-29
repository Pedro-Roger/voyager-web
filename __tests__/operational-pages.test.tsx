import { render, screen } from '@testing-library/react';
import MunicipalitiesPage from '../app/(app)/municipios/page';
import UnitsPage from '../app/(app)/unidades/page';
import NewUnitPage from '../app/(app)/unidades/nova/page';
import AgreementsPage from '../app/(app)/convenios/page';
import IssuesPage from '../app/(app)/pendencias/page';
import DocumentsPage from '../app/(app)/documentos/page';
import IssueDetailPage from '../app/(app)/pendencias/iss-982/page';
import CompliancePage from '../app/(app)/documentos/conformidade/page';

describe('operational Stitch pages', () => {
  it('renders municipalities', () => {
    render(<MunicipalitiesPage />);
    expect(screen.getByRole('heading', { name: 'Municípios' })).toBeInTheDocument();
    expect(screen.getByText('Fortaleza')).toBeInTheDocument();
    expect(screen.getByText('Sobral')).toBeInTheDocument();
  });

  it('renders units and unit setup', () => {
    render(<UnitsPage />);
    expect(screen.getByRole('heading', { name: 'Unidades' })).toBeInTheDocument();
    expect(screen.getByText('Secretaria de Saúde')).toBeInTheDocument();

    render(<NewUnitPage />);
    expect(screen.getByRole('heading', { name: 'Cadastrar unidade' })).toBeInTheDocument();
    expect(screen.getByLabelText('Nome da unidade')).toBeInTheDocument();
    expect(screen.getByLabelText('Município')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Salvar unidade' })).toBeInTheDocument();
  });

  it('renders agreements', () => {
    render(<AgreementsPage />);
    expect(screen.getByRole('heading', { name: 'Convênios' })).toBeInTheDocument();
    expect(screen.getByText('Alpha Central Expansion')).toBeInTheDocument();
  });

  it('renders issues', () => {
    render(<IssuesPage />);
    expect(screen.getByRole('heading', { name: 'Pendências' })).toBeInTheDocument();
    expect(screen.getByText('Documentação de conformidade incompleta')).toBeInTheDocument();

    render(<IssueDetailPage />);
    expect(screen.getByRole('heading', { name: 'Pendência ISS-982' })).toBeInTheDocument();
    expect(screen.getByText('Linha do tempo')).toBeInTheDocument();
  });

  it('renders documents', () => {
    render(<DocumentsPage />);
    expect(screen.getByRole('heading', { name: 'Documentos' })).toBeInTheDocument();
    expect(screen.getByText('Plano de trabalho')).toBeInTheDocument();

    render(<CompliancePage />);
    expect(screen.getByRole('heading', { name: 'Checklist de conformidade' })).toBeInTheDocument();
    expect(screen.getByText('Requisitos obrigatórios')).toBeInTheDocument();
  });
});
