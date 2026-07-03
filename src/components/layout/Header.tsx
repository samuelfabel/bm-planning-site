import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GITHUB_REPO_URL } from '@/config';
import { GitHubIcon } from '@/components/ui/GitHubIcon';

const navItems = [
  { to: '/features', label: 'Features' },
  { to: '/docs', label: 'Docs' },
  { to: '/api-reference', label: 'API' },
  { to: '/self-host', label: 'Self-host' },
  { to: '/roadmap', label: 'Roadmap' },
];

function navLinkClass(isActive: boolean) {
  return `block px-3 py-2 rounded-md text-sm transition-colors ${
    isActive
      ? 'text-white bg-slate-700/60'
      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
  }`;
}

function GitHubLink({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <a
      href={GITHUB_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        'inline-flex items-center gap-2 rounded-md bg-slate-700/60 hover:bg-slate-600/60 text-white text-xs font-medium px-3 py-1.5 transition-colors'
      }
      onClick={onClick}
    >
      <GitHubIcon />
      GitHub
    </a>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bm-navy border-b border-slate-700">
      <div className="max-w-6xl mx-auto h-14 flex items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 group shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <div className="h-8 w-8 rounded-md bg-bm-blue flex items-center justify-center text-white text-xs font-bold">
            BM
          </div>
          <span className="text-white font-semibold text-sm tracking-tight group-hover:text-slate-200 transition-colors">
            BM Planning
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => navLinkClass(isActive)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <GitHubLink className="hidden sm:inline-flex items-center gap-2 rounded-md bg-slate-700/60 hover:bg-slate-600/60 text-white text-xs font-medium px-3 py-1.5 transition-colors" />

          <button
            type="button"
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700/50"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-slate-700 bg-bm-navy px-4 py-2 space-y-0.5"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => navLinkClass(isActive)}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-1 sm:hidden">
            <GitHubLink
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
              onClick={() => setMenuOpen(false)}
            />
          </div>
        </nav>
      )}
    </header>
  );
}
