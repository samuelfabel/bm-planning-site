import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Native integration',
    description:
      'Connects via Businessmap API v2. Filter cards by board, column, lane, and tags.',
    icon: '🔗',
  },
  {
    title: 'Real time',
    description:
      'WebSockets sync votes between facilitator and participants in the same room.',
    icon: '⚡',
  },
  {
    title: 'Client-side credentials',
    description:
      'API Key and subdomain stay in sessionStorage. The server never persists credentials.',
    icon: '🔒',
  },
  {
    title: 'Self-hosting',
    description:
      'Lightweight Go back end with Docker. Single binary + embedded static assets.',
    icon: '🐳',
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-bm-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-bm-textDark">
            Everything your team needs to estimate
          </h2>
          <p className="text-bm-textMuted mt-3 max-w-xl mx-auto">
            Open source, integrated with the Kanban workflow you already use.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-bm-bg border border-bm-border rounded-lg p-5 hover:border-bm-blue/30 transition-colors"
            >
              <span className="text-2xl" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="text-sm font-semibold text-bm-textDark mt-3">{feature.title}</h3>
              <p className="text-xs text-bm-textMuted mt-2 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/features"
            className="text-sm font-medium text-bm-blue hover:text-blue-700 transition-colors"
          >
            View all features →
          </Link>
        </div>
      </div>
    </section>
  );
}
