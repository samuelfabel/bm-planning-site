import { Link } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/SiteLayout';

export function NotFoundPage() {
  return (
    <SiteLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
        <p className="text-6xl font-bold text-bm-border">404</p>
        <h1 className="text-2xl font-bold text-bm-textDark mt-4">Page not found</h1>
        <p className="text-bm-textMuted mt-2">The route you requested does not exist on this site.</p>
        <Link
          to="/"
          className="inline-flex mt-8 text-sm font-medium text-bm-blue hover:text-blue-700 transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </SiteLayout>
  );
}
