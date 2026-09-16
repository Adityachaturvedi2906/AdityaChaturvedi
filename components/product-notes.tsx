"use client";

import SectionHeading from "./section-heading";

export default function ProductNotes() {
  return (
    <section id="product-notes" className="mx-auto mb-28 w-full max-w-5xl scroll-mt-28 sm:mb-40">
      <SectionHeading>Product notes</SectionHeading>
      <article className="rounded-3xl border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-white/[0.04] md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Onboarding teardown</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">POP onboarding: a friction point worth investigating</h3>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600 dark:text-white/70">
          A product observation on how a verification step can affect the first transaction experience. The current flow can leave a new user unable to transact for roughly 24–48 hours while verification is completed.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {[
            ["User moment", "A new user finishes signup but cannot immediately transact."],
            ["Product question", "Can the verification state be made clearer before the user reaches the payment moment?"],
            ["What I would test", "Clearer expectations, status visibility, and a guided next step during verification."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-gray-50 p-5 dark:bg-white/[0.05]">
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
