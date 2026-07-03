import { useMemo } from 'react';
import { ApiReferenceReact } from '@scalar/api-reference-react';

const DEFAULT_BASE_URL = 'http://localhost:8080/api';
const BASE_URL_STORAGE_KEY = 'bm-planning-api-base-url';

function normalizeBaseUrl(value: string): string {
  return value.trim().replace(/\/+$/, '');
}

function readStoredBaseUrl(): string {
  try {
    const stored = localStorage.getItem(BASE_URL_STORAGE_KEY);
    if (stored) {
      return normalizeBaseUrl(stored);
    }
  } catch {
    // ignore
  }
  return DEFAULT_BASE_URL;
}

function persistBaseFromServerUrl(server: string): void {
  const trimmed = server.trim().replace(/\/+$/, '');
  const match = trimmed.match(/^(.*)\/v1$/);
  if (!match?.[1]) {
    return;
  }
  try {
    localStorage.setItem(BASE_URL_STORAGE_KEY, normalizeBaseUrl(match[1]));
  } catch {
    // ignore
  }
}

interface ApiReferenceScalarProps {
  specUrl: string;
}

export function ApiReferenceScalar({ specUrl }: ApiReferenceScalarProps) {
  const initialBase = readStoredBaseUrl();

  const configuration = useMemo(
    () => ({
      url: specUrl,
      layout: 'modern' as const,
      theme: 'default',
      forceDarkModeState: 'light' as const,
      hideDarkModeToggle: true,
      showDeveloperTools: 'never' as const,
      hideClientButton: true,
      documentDownloadType: 'none' as const,
      withDefaultFonts: false,
      servers: [
        {
          url: '{base}/v1',
          description: 'Self-hosted deployment',
          variables: {
            base: {
              default: initialBase,
              description: 'Base URL through /api',
            },
          },
        },
      ],
      onServerChange: (server: string) => {
        persistBaseFromServerUrl(server);
      },
    }),
    [specUrl, initialBase],
  );

  return <ApiReferenceReact configuration={configuration} />;
}
