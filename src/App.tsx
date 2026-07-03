import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { FeaturesPage } from '@/pages/FeaturesPage';
import { SelfHostPage } from '@/pages/SelfHostPage';
import { RoadmapPage } from '@/pages/RoadmapPage';
import { DocsPage } from '@/pages/DocsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

const ApiReferencePage = lazy(() =>
  import('@/pages/ApiReferencePage').then((module) => ({ default: module.ApiReferencePage })),
);

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/self-host" element={<SelfHostPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route
          path="/api-reference"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center text-sm text-bm-textMuted">
                  Loading API reference…
                </div>
              }
            >
              <ApiReferencePage />
            </Suspense>
          }
        />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
