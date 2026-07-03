import { SiteLayout, PageHeader } from '@/components/layout/SiteLayout';
import { Link } from 'react-router-dom';
import {
  API_REFERENCE_PATH,
  BUSINESSMAP_API_KB_URL,
  BUSINESSMAP_API_URL,
  GITHUB_REPO_URL,
  OPENAPI_SPEC_GITHUB_URL,
} from '@/config';
import { ExternalLinkIcon } from '@/components/ui/ExternalLinkIcon';

const docSections = [
  {
    title: 'How this project is distributed',
    description:
      'BM Planning is open source and self-hosted only. This website is documentation and marketing — there is no hosted API or multi-tenant service run by the authors. Clone the repository, build, and run it on your infrastructure.',
    links: [
      {
        label: 'Main repository',
        href: GITHUB_REPO_URL,
        external: true,
      },
      {
        label: 'Self-hosting guide',
        href: '/self-host',
        external: false,
      },
    ],
  },
  {
    title: 'Businessmap API v2',
    description:
      'When you run BM Planning, the facilitator browser calls Businessmap directly (API key in sessionStorage). These are the upstream docs from Businessmap — not hosted by us.',
    links: [
      {
        label: 'Businessmap API overview',
        href: BUSINESSMAP_API_URL,
        external: true,
      },
      {
        label: 'REST API knowledge base',
        href: BUSINESSMAP_API_KB_URL,
        external: true,
      },
    ],
  },
  {
    title: 'Room API',
    description:
      'REST and WebSocket endpoints for planning rooms on the Go server you deploy yourself.',
    links: [
      {
        label: 'OpenAPI spec on GitHub',
        href: OPENAPI_SPEC_GITHUB_URL,
        external: true,
      },
    ],
  },
  {
    title: 'API reference',
    description:
      'Browse and try the room API on this site. Set the base URL in the introduction panel (through /api) to target your Go deployment.',
    links: [
      {
        label: 'Open API reference',
        href: API_REFERENCE_PATH,
        external: false,
      },
    ],
  },
  {
    title: 'Architecture',
    links: [
      {
        label: 'ADRs (decisions)',
        href: `${GITHUB_REPO_URL}/tree/main/docs/decisions`,
        external: true,
      },
      {
        label: 'Roadmap',
        href: '/roadmap',
        external: false,
      },
    ],
  },
];

function DocLink({
  label,
  href,
  hint,
  external,
}: {
  label: string;
  href: string;
  hint?: string;
  external?: boolean;
}) {
  const className =
    'text-bm-blue font-medium hover:underline inline-flex items-center gap-1';

  const content = (
    <>
      {label}
      {external && <ExternalLinkIcon />}
    </>
  );

  return (
    <li className="text-sm">
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {content}
        </a>
      ) : href.startsWith('/') ? (
        <Link to={href} className={className}>
          {content}
        </Link>
      ) : (
        <a href={href} className={className}>
          {content}
        </a>
      )}
      {hint && <p className="text-xs text-bm-textMuted mt-1 leading-relaxed">{hint}</p>}
    </li>
  );
}

export function DocsPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Documentation"
        description="Self-hosting, Businessmap integration, and developer references on GitHub."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          No online service — install from GitHub or Docker on your own network. A browser demo may be
          embedded on this site later; live rooms always require your own server.
        </div>

        {docSections.map((section) => (
          <section key={section.title} className="bg-white border border-bm-border rounded-lg p-6 sm:p-8">
            <h2 className="text-lg font-bold text-bm-textDark">{section.title}</h2>
            {section.description && (
              <p className="text-sm text-bm-textMuted mt-2 leading-relaxed">{section.description}</p>
            )}
            <ul className="mt-4 space-y-3">
              {section.links.map((link) => (
                <DocLink key={link.label} {...link} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}
