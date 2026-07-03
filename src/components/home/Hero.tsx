import { Link } from 'react-router-dom';
import { ExternalLink } from '@/components/ui/Button';
import { GITHUB_REPO_URL } from '@/config';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-bm-bg to-bm-bg" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
        <div className="inline-flex h-16 w-16 rounded-xl bg-bm-navy items-center justify-center mb-6 shadow-lg">
          <span className="text-2xl font-bold text-bm-blue">BM</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-bm-textDark tracking-tight max-w-3xl mx-auto">
          Planning Poker integrated with{' '}
          <span className="text-bm-blue">Businessmap</span>
        </h1>

        <p className="text-lg sm:text-xl text-bm-textMuted mt-5 max-w-2xl mx-auto leading-relaxed">
          Estimate stories in real time, connect to cards on your Kanban board, and sync Story Points.
          Self-host on your network — we do not run a public instance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <ExternalLink href={GITHUB_REPO_URL}>View on GitHub</ExternalLink>
          <Link
            to="/features"
            className="inline-flex items-center justify-center rounded-md border border-bm-border bg-white hover:bg-bm-board text-bm-textDark px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Explore features
          </Link>
        </div>
      </div>
    </section>
  );
}
