import { SiteLayout } from '@/components/layout/SiteLayout';
import { Hero } from '@/components/home/Hero';
import { ProblemSolution } from '@/components/home/ProblemSolution';
import { FeaturesGrid } from '@/components/home/FeaturesGrid';
import { MockUI } from '@/components/home/MockUI';
import { ExternalLink } from '@/components/ui/Button';
import { GITHUB_REPO_URL } from '@/config';

export function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <ProblemSolution />
      <FeaturesGrid />
      <MockUI />

      <section className="py-16 sm:py-20 bg-bm-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to estimate with your team?
          </h2>
          <p className="text-slate-300 mt-3 max-w-lg mx-auto">
            Open source, Docker self-hosting, and native Businessmap integration.
          </p>
          <div className="mt-8">
            <ExternalLink href={GITHUB_REPO_URL}>View on GitHub</ExternalLink>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
