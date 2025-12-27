import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 p-10 text-white">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-white/90">READY TO GO?</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Plan your next trip in minutes.
            </h2>
            <p className="mt-3 text-white/90">
              Create a trip, match with buddies, and manage meetups—without the chaos.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 hover:bg-white/90 transition"
              >
                Create Free Account
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
