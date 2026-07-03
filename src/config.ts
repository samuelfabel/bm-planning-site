export const GITHUB_USER = 'samuelfabel';

export const GITHUB_REPO_URL =
  import.meta.env.VITE_GITHUB_REPO_URL ?? `https://github.com/${GITHUB_USER}/bm-planning`;

export const GITHUB_SITE_URL =
  import.meta.env.VITE_SITE_URL ?? `https://${GITHUB_USER}.github.io/bm-planning/`;

export const BASE_PATH = import.meta.env.BASE_URL;

/** OpenAPI spec in the main repository (no public API is hosted on this site). */
export const OPENAPI_SPEC_GITHUB_URL = `${GITHUB_REPO_URL}/blob/main/server/internal/api/openapi/openapi.yaml`;

export const API_REFERENCE_PATH = '/api-reference';

export const BUSINESSMAP_API_URL = 'https://businessmap.io/api';
export const BUSINESSMAP_API_KB_URL =
  'https://knowledgebase.businessmap.io/hc/en-us/articles/360012393692-Businessmap-REST-API';

export type RoadmapStatus = 'done' | 'partial' | 'open';

/** Shipped MVP milestones — keep in sync with bm-planning/docs/roadmap/ROADMAP.md */
export const ROADMAP_SHIPPED: ReadonlyArray<{
  id: string;
  title: string;
  description: string;
  status: RoadmapStatus;
}> = [
  {
    id: 'mock-ui',
    title: 'Spec + mocked UI',
    description: 'Architecture spec, React routes, and mocked components to validate flow and visual identity.',
    status: 'done',
  },
  {
    id: 'bm-browser',
    title: 'Businessmap in browser',
    description: 'Facilitator calls Businessmap API v2 directly from the browser — no server proxy. Setup integrated.',
    status: 'done',
  },
  {
    id: 'rooms-ws',
    title: 'Rooms + WebSocket',
    description: 'Create and join rooms, waiting room, card replication, and real-time sync over WebSocket.',
    status: 'done',
  },
  {
    id: 'voting',
    title: 'Full voting',
    description: 'Planning Poker rounds, vote reveal, revote, skip/next, and consensus (Croupier excluded from average).',
    status: 'done',
  },
  {
    id: 'bm-sync',
    title: 'Businessmap sync',
    description: 'Persist consensus to custom field or native Size from the facilitator browser after each round.',
    status: 'done',
  },
  {
    id: 'hardening',
    title: 'Hardening + deploy',
    description: 'Embedded SPA, /ready, /metrics, HTTP rate limit, security headers, Alpine Docker (~31 MB).',
    status: 'done',
  },
];

export type RoadmapHorizon = 'now' | 'next' | 'later';

/** Post-MVP — keep in sync with bm-planning/docs/roadmap/FUTURE.md */
export const ROADMAP_FUTURE: ReadonlyArray<{
  id: string;
  horizon: RoadmapHorizon;
  title: string;
  description: string;
  status: RoadmapStatus;
}> = [
  {
    id: 'swagger',
    horizon: 'now',
    title: 'OpenAPI + Swagger UI',
    description: 'Shipped in the repo — available only when you self-host the Go server.',
    status: 'done',
  },
  {
    id: 'docker-hub',
    horizon: 'now',
    title: 'Docker Hub image',
    description: 'Container image samuelfabel/bm-planning — release workflow in repo.',
    status: 'done',
  },
  {
    id: 'offline',
    horizon: 'next',
    title: 'Offline planning mode',
    description: 'Paste tasks in a textarea; planning runs entirely in the browser without a server.',
    status: 'open',
  },
  {
    id: 'sse',
    horizon: 'next',
    title: 'SSE fallback',
    description: 'Server-sent events when WebSocket is blocked by corporate proxies.',
    status: 'open',
  },
  {
    id: 'e2e',
    horizon: 'next',
    title: 'E2E tests',
    description: 'Playwright coverage for facilitator + guest voting flows.',
    status: 'open',
  },
  {
    id: 'histogram',
    horizon: 'next',
    title: 'Vote histogram',
    description: 'Visual vote distribution after reveal.',
    status: 'open',
  },
  {
    id: 'redis',
    horizon: 'later',
    title: 'Redis multi-instance',
    description: 'Optional REDIS_URL for horizontal scaling of room state.',
    status: 'open',
  },
  {
    id: 'ws-ratelimit',
    horizon: 'later',
    title: 'WebSocket rate limit',
    description: 'Per-client message throttle on live connections.',
    status: 'open',
  },
  {
    id: 'export',
    horizon: 'later',
    title: 'Session export',
    description: 'Download CSV/JSON of estimates and Businessmap sync results.',
    status: 'open',
  },
];

export const HORIZON_LABELS: Record<RoadmapHorizon, string> = {
  now: 'Now',
  next: 'Next',
  later: 'Later',
};

/** @deprecated use ROADMAP_SHIPPED */
export const ROADMAP = ROADMAP_SHIPPED;
