import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-14">{children}</main>
      <Footer />
    </div>
  );
}

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-white border-b border-bm-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-bm-textDark tracking-tight">{title}</h1>
        <p className="text-lg text-bm-textMuted mt-3 max-w-2xl leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
