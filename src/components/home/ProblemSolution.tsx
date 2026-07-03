export function ProblemSolution() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-white border border-bm-border rounded-lg p-6 sm:p-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded">
              Problem
            </span>
            <h2 className="text-xl font-bold text-bm-textDark mt-4">
              Estimates disconnected from the board
            </h2>
            <p className="text-bm-textMuted mt-3 leading-relaxed">
              Agile teams using Businessmap have no native Planning Poker. Teams fall back to
              planningpoker.com, Miro, or spreadsheets — losing the link to cards and
              requiring manual rework to record Story Points or custom fields.
            </p>
          </article>

          <article className="bg-white border border-bm-border rounded-lg p-6 sm:p-8 ring-1 ring-bm-blue/10">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-bm-blue bg-blue-50 px-2.5 py-1 rounded">
              Solution
            </span>
            <h2 className="text-xl font-bold text-bm-textDark mt-4">
              Collaborative voting with card sync
            </h2>
            <p className="text-bm-textMuted mt-3 leading-relaxed">
              BM Planning connects via REST API v2, lets you build queues with structured filters,
              runs real-time sessions, and persists consensus directly on the original Businessmap
              card — with the API Key kept secure in the browser only.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
