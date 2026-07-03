import { SiteLayout, PageHeader } from '@/components/layout/SiteLayout';
import { Link } from 'react-router-dom';
import { GITHUB_REPO_URL } from '@/config';

const envVars = [
  { name: 'PORT', default: '8080', description: 'HTTP listen port' },
  { name: 'CORS_ORIGINS', default: 'localhost:5173', description: 'Allowed origins (comma-separated)' },
  { name: 'ALLOWED_ORIGINS', default: '—', description: 'Overrides CORS_ORIGINS when set' },
  { name: 'ROOM_GRACE_AFTER_DISCONNECT', default: '1h', description: 'Room TTL after all clients disconnect' },
  { name: 'MAX_PARTICIPANTS', default: '50', description: 'Participant limit per room' },
  { name: 'HTTP_RATE_LIMIT_PER_MIN', default: '60', description: 'Rate limit for /api/v1/* per IP' },
  { name: 'REDIS_URL', default: '—', description: 'Optional — multi-instance room state (future)' },
];

export function SelfHostPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Self-hosting"
        description="BM Planning is not offered as a hosted service. Run the stack on your infrastructure — API key stays in the facilitator browser; the Go server coordinates rooms only."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        <section className="rounded-lg border border-bm-border bg-bm-board px-4 py-3 text-sm text-bm-textDark">
          There is no public API at this domain. Documentation here describes how to run your own instance
          from{' '}
          <a href={GITHUB_REPO_URL} className="text-bm-blue hover:underline" target="_blank" rel="noopener noreferrer">
            github.com/samuelfabel/bm-planning
          </a>
          .
        </section>
        <section className="bg-white border border-bm-border rounded-lg p-6 sm:p-8">
          <h2 className="text-lg font-bold text-bm-textDark">Requirements</h2>
          <ul className="mt-4 space-y-2 text-sm text-bm-textMuted">
            <li>• Docker 24+ or Go 1.23+ (build from source)</li>
            <li>• Exposed HTTP port (default 8080)</li>
            <li>• HTTPS access to your organization&apos;s Businessmap subdomain (facilitator browser)</li>
            <li>• Businessmap API Key with read/write permission on cards</li>
          </ul>
        </section>

        <section className="bg-white border border-bm-border rounded-lg p-6 sm:p-8">
          <h2 className="text-lg font-bold text-bm-textDark">Docker</h2>
          <p className="text-sm text-bm-textMuted mt-2">
            Multi-stage Alpine image (~31 MB). Pull from Docker Hub or build from source.
          </p>
          <pre className="mt-4 bg-bm-navy text-slate-100 text-xs sm:text-sm rounded-lg p-4 overflow-x-auto leading-relaxed">
{`# Docker Hub (after first release)
docker run -d --name bm-planning -p 8080:8080 \\
  samuelfabel/bm-planning:latest

# Or build from source
git clone ${GITHUB_REPO_URL}.git
cd bm-planning
docker compose -f docker/docker-compose.yml up --build`}
          </pre>
        </section>

        <section className="bg-white border border-bm-border rounded-lg p-6 sm:p-8">
          <h2 className="text-lg font-bold text-bm-textDark">API reference</h2>
          <p className="text-sm text-bm-textMuted mt-2 leading-relaxed">
            Browse the OpenAPI spec on this site at{' '}
            <Link to="/api-reference" className="text-bm-blue hover:underline">
              /api-reference
            </Link>{' '}
            (read-only). When you run the Go server locally, the same UI is also at{' '}
            <code className="text-xs bg-bm-board px-1 py-0.5 rounded">http://localhost:8080/api/docs</code>.
          </p>
        </section>

        <section className="bg-white border border-bm-border rounded-lg p-6 sm:p-8">
          <h2 className="text-lg font-bold text-bm-textDark">Health endpoints</h2>
          <ul className="mt-4 space-y-2 text-sm text-bm-textMuted font-mono">
            <li>GET /health — liveness</li>
            <li>GET /ready — readiness</li>
            <li>GET /metrics — Prometheus</li>
          </ul>
        </section>

        <section className="bg-white border border-bm-border rounded-lg p-6 sm:p-8">
          <h2 className="text-lg font-bold text-bm-textDark">Environment variables</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-bm-border text-left">
                  <th className="py-2 pr-4 font-semibold text-bm-textDark">Variable</th>
                  <th className="py-2 pr-4 font-semibold text-bm-textDark">Default</th>
                  <th className="py-2 font-semibold text-bm-textDark">Description</th>
                </tr>
              </thead>
              <tbody>
                {envVars.map((row) => (
                  <tr key={row.name} className="border-b border-bm-border last:border-0">
                    <td className="py-3 pr-4 font-mono text-xs text-bm-blue">{row.name}</td>
                    <td className="py-3 pr-4 font-mono text-xs text-bm-textMuted">{row.default}</td>
                    <td className="py-3 text-bm-textMuted">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="text-sm text-bm-textMuted text-center">
          See{' '}
          <a
            href={`${GITHUB_REPO_URL}/blob/main/README.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bm-blue hover:underline"
          >
            README in the repository
          </a>{' '}
          for full deployment details.
        </p>
      </div>
    </SiteLayout>
  );
}
