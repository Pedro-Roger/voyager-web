const steps = ['Upload', 'Revisão', 'Mapeamento', 'Concluído'];

export function ImportStepper({ current }: { current: number }) {
  return <ol aria-label="Etapas da importação" className="import-stepper">{steps.map((step, index) => <li className={index <= current ? 'complete' : ''} key={step}><span>{index < current ? '✓' : index + 1}</span>{step}</li>)}</ol>;
}
