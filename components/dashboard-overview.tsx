type DashboardCard = {
  label: string;
  value: string;
};

type DashboardOverviewProps = {
  cards: DashboardCard[];
};

export function DashboardOverview({ cards }: DashboardOverviewProps) {
  return (
    <section aria-label="Visão geral operacional">
      <div>
        {cards.map((card) => (
          <article key={card.label}>
            <strong>{card.value}</strong>
            <p>{card.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
