import { ImportStepper } from '../../../components/import-stepper';

export default function ImportUploadPage() {
  return <section className="flow-page"><ImportStepper current={0} /><header><p className="eyebrow">IMPORTAÇÃO</p><h1>Importar dados</h1><p>Envie uma planilha CSV ou XLSX para iniciar a validação.</p></header><div className="flow-card upload-layout"><div className="drop-zone"><span className="upload-icon">⇧</span><strong>Solte seu arquivo aqui</strong><p>ou clique para selecionar no computador</p><label className="secondary-action">Selecionar arquivo<input accept=".csv,.xlsx" hidden type="file" /></label><small>Máximo de 25 MB</small></div><aside><h2>Modelos de planilha</h2><p>Use nossos modelos para evitar erros de estrutura.</p><a href="#">Municípios.csv ↓</a><a href="#">Unidades.csv ↓</a><a href="#">Convênios.xlsx ↓</a></aside></div></section>;
}
