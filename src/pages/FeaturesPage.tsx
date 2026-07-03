import { SiteLayout, PageHeader } from '@/components/layout/SiteLayout';

const featureSections = [
  {
    title: 'Planning Poker',
    description:
      'Collaborative sessions with a Fibonacci deck, vote reveal, and consensus between facilitator and participants. Flow designed for agile estimation ceremonies.',
    highlights: [
      'Fibonacci, sequential, or T-shirt deck',
      'Croupier mode — facilitate without voting or affecting the average',
      'Vote average → nearest card (Planning Poker Online style)',
      'Reveal controlled by the facilitator',
    ],
  },
  {
    title: 'Businessmap integration',
    description:
      'Connection via REST API v2 with structured filters by board, column, lane, and tags. Builds the card queue directly from your Kanban board.',
    highlights: [
      'API Key and subdomain only in the browser',
      'Direct browser calls to Businessmap API v2 (facilitator only)',
      'Custom field or native card Size field',
      'Save deck card or arithmetic average to BM',
    ],
  },
  {
    title: 'Real time',
    description:
      'WebSocket as the primary channel with SSE fallback. Syncs votes, round state, and events across all room participants.',
    highlights: [
      'Rooms with waiting room',
      'Events: round_started, vote_received, votes_revealed',
      'Up to 50 participants per room (configurable)',
      'Inactive room TTL',
    ],
  },
  {
    title: 'Self-host',
    description:
      'Deploy with Docker or a single Go binary. Embedded static assets, lean Docker image, and simple environment variables for production.',
    highlights: [
      'Multi-stage Alpine Dockerfile',
      'No credential persistence on the server',
      'Optional Redis for multi-instance',
      'Configurable CORS',
    ],
  },
];

export function FeaturesPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Features"
        description="BM Planning combines Planning Poker, native Businessmap integration, and lightweight infrastructure for self-hosting."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        {featureSections.map((section, index) => (
          <article
            key={section.title}
            className="bg-white border border-bm-border rounded-lg p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-bm-blue/10 text-bm-blue flex items-center justify-center text-sm font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-bm-textDark">{section.title}</h2>
                <p className="text-bm-textMuted mt-2 leading-relaxed">{section.description}</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                  {section.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-bm-textDark"
                    >
                      <span className="text-bm-blue mt-0.5" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
