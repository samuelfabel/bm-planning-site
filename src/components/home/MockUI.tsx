const deckValues = ['1', '2', '3', '5', '8', '13', '?'];

const participants = [
  { name: 'Ana', voted: true, value: '5' },
  { name: 'Bruno', voted: true, value: '8' },
  { name: 'Carla', voted: true, value: '5' },
  { name: 'Diego', voted: false, value: null },
];

export function MockUI() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-bm-textDark">
            Interface designed for facilitators
          </h2>
          <p className="text-bm-textMuted mt-3">
            Voting room mock — preview of the main app in development.
          </p>
        </div>

        <div className="bg-bm-navy rounded-xl shadow-2xl overflow-hidden border border-slate-700">
          <div className="h-10 bg-slate-800/80 border-b border-slate-700 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>
            <span className="text-xs text-slate-400 ml-2">bm-planning — room /demo</span>
          </div>

          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Active card</p>
                <p className="text-white font-medium text-sm mt-0.5">
                  US-142 · Implement lane filter
                </p>
              </div>
              <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                Round in progress
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {participants.map((p) => (
                <div
                  key={p.name}
                  className="bg-slate-800/60 rounded-lg p-3 text-center border border-slate-700"
                >
                  <p className="text-xs text-slate-400">{p.name}</p>
                  <div
                    className={`mt-2 h-10 w-8 mx-auto rounded flex items-center justify-center text-sm font-bold ${
                      p.voted
                        ? 'bg-bm-blue text-white'
                        : 'bg-slate-700 text-slate-500 border border-dashed border-slate-600'
                    }`}
                  >
                    {p.voted ? p.value : '·'}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {deckValues.map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`h-12 w-9 rounded-md text-sm font-bold transition-colors ${
                    value === '5'
                      ? 'bg-bm-blue text-white ring-2 ring-blue-300'
                      : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                  }`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
