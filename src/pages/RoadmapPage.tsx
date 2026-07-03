import { SiteLayout, PageHeader } from '@/components/layout/SiteLayout';
import {
  ROADMAP_SHIPPED,
  ROADMAP_FUTURE,
  HORIZON_LABELS,
  type RoadmapStatus,
  type RoadmapHorizon,
} from '@/config';

const statusLabels: Record<RoadmapStatus, { label: string; className: string }> = {
  done: {
    label: 'Done',
    className: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  partial: {
    label: 'Partial',
    className: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  open: {
    label: 'Planned',
    className: 'bg-slate-100 text-bm-textMuted border-bm-border',
  },
};

function PhaseCard({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: RoadmapStatus;
}) {
  const badge = statusLabels[status];
  return (
    <article className="bg-white border border-bm-border rounded-lg p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-lg font-bold text-bm-textDark">{title}</h2>
        <span className={`text-xs font-medium px-2 py-0.5 rounded border ${badge.className}`}>
          {badge.label}
        </span>
      </div>
      <p className="text-sm text-bm-textMuted mt-2 leading-relaxed">{description}</p>
    </article>
  );
}

function TimelineSection({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ id: string; title: string; description: string; status: RoadmapStatus }>;
}) {
  if (items.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-bm-textMuted">{title}</h2>
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-bm-border" aria-hidden="true" />
        <ol className="space-y-4">
          {items.map((phase) => (
            <li key={phase.id} className="relative pl-12 sm:pl-16">
              <span
                className={`absolute left-2.5 sm:left-4 top-6 h-3 w-3 rounded-full border-2 -translate-y-1/2 ${
                  phase.status === 'done'
                    ? 'bg-emerald-500 border-emerald-600'
                    : phase.status === 'partial'
                      ? 'bg-amber-400 border-amber-500'
                      : 'bg-white border-bm-border'
                }`}
                aria-hidden="true"
              />
              <PhaseCard title={phase.title} description={phase.description} status={phase.status} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function RoadmapPage() {
  const horizons: RoadmapHorizon[] = ['now', 'next', 'later'];

  return (
    <SiteLayout>
      <PageHeader
        title="Roadmap"
        description="What shipped in the MVP and what we are building next."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <TimelineSection title="Shipped — MVP" items={ROADMAP_SHIPPED} />

        {horizons.map((horizon) => (
          <TimelineSection
            key={horizon}
            title={HORIZON_LABELS[horizon]}
            items={ROADMAP_FUTURE.filter((item) => item.horizon === horizon)}
          />
        ))}
      </div>
    </SiteLayout>
  );
}
