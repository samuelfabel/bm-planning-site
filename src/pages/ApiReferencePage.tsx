import { Suspense, lazy } from 'react';
import { Header } from '@/components/layout/Header';

const ApiReferenceScalar = lazy(() =>
  import('@/components/api/ApiReferenceScalar').then((module) => ({
    default: module.ApiReferenceScalar,
  })),
);

function openApiSpecUrl(): string {
  const base = import.meta.env.BASE_URL;
  return `${base}openapi.yaml`;
}

export function ApiReferencePage() {
  return (
    <div className="api-reference-page">
      <Header />

      <div className="scalar-bm-theme api-reference-page__docs">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-full text-sm text-bm-textMuted">
              Loading API reference…
            </div>
          }
        >
          <ApiReferenceScalar specUrl={openApiSpecUrl()} />
        </Suspense>
      </div>
    </div>
  );
}
