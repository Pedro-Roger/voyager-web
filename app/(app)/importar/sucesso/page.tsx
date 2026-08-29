import { ImportStepper } from '../../../../components/import-stepper';

export default function ImportSuccessPage() {
  return <section className="flow-page"><ImportStepper current={3} /><div className="flow-card success-card"><span className="success-icon">✓</span><p className="eyebrow">IMPORTAÇÃO FINALIZADA</p><h1>Importação concluída</h1><p>Dados processados e preparados para uso no Voyager.</p><div className="success-metrics"><span><strong>1.248 registros</strong>importados</span><span><strong>12 alertas</strong>para revisão</span><span><strong>3 rejeitados</strong>não importados</span></div><div className="success-actions"><a className="primary-action" href="/municipios">Ver dados importados</a><a href="/importar">Nova importação</a></div></div></section>;
}
