import { Link } from 'react-router-dom';
import { GITHUB_REPO_URL } from '@/config';

export function Footer() {
  return (
    <footer className="border-t border-bm-border bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-bm-blue flex items-center justify-center text-white text-xs font-bold">
                BM
              </div>
              <span className="font-semibold text-bm-textDark text-sm">BM Planning</span>
            </div>
            <p className="text-xs text-bm-textMuted mt-2 max-w-sm">
              Open source Planning Poker integrated with Businessmap. MIT License.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/features" className="text-bm-textMuted hover:text-bm-blue transition-colors">
              Features
            </Link>
            <Link to="/docs" className="text-bm-textMuted hover:text-bm-blue transition-colors">
              Docs
            </Link>
            <Link to="/api-reference" className="text-bm-textMuted hover:text-bm-blue transition-colors">
              API
            </Link>
            <Link to="/self-host" className="text-bm-textMuted hover:text-bm-blue transition-colors">
              Self-host
            </Link>
            <Link to="/roadmap" className="text-bm-textMuted hover:text-bm-blue transition-colors">
              Roadmap
            </Link>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bm-textMuted hover:text-bm-blue transition-colors"
            >
              Repository
            </a>
          </div>
        </div>

        <p className="text-xs text-bm-textMuted mt-8 pt-6 border-t border-bm-border">
          © {new Date().getFullYear()} BM Planning. Not affiliated with Businessmap/Kanbanize.
        </p>
      </div>
    </footer>
  );
}
