export default function Arcade() {
  return (
    <section id="arcade" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-neutral-200 bg-neutral-950 p-8 text-white shadow-sm md:p-12">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
              Featured product · Easebuzz
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Arcade</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
              A guided workspace that makes payment gateway integrations easier to understand and test.
            </p>
          </div>
          <span className="w-fit rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">
            Internal product
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Problem', 'Integration documentation was dense and often turned simple onboarding questions into support calls.'],
            ['What I did', 'Mapped recurring merchant questions into a shorter, guided API workflow and built the first version.'],
            ['Outcome', 'Phase 1 is live internally and was validated with 5–6 merchants during onboarding and troubleshooting.'],
            ['Next', 'Extend the workflow from mock API calls to real sandbox API execution.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5">
              <p className="text-sm font-medium text-neutral-400">{title}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-200">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {['Payments', 'Merchant onboarding', 'API workflows', 'Problem discovery'].map((tag) => (
            <span key={tag} className="rounded-full bg-neutral-800 px-3 py-1.5 text-xs text-neutral-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
