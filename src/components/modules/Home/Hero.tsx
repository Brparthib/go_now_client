import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-linear(circle_at_1px_1px,rgba(15,23,42,0.25)_1px,transparent_0)] bg-size-[24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
              Plan smarter • Travel together • Stay organized
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Manage trips, meet travel buddies, and keep everything in one place.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              GoNow helps you build itineraries, coordinate meetups, and discover compatible
              travelers—without messy spreadsheets or endless chat threads.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Get Started
              </Link>
              <Link
                href="/explore"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Explore Travelers
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                  ✓
                </span>
                Smart itineraries
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                  ✓
                </span>
                Buddy matching
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                  ✓
                </span>
                Meetup planning
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Next Trip</p>
                  <p className="text-xs text-slate-500">Everything you need, neatly organized</p>
                </div>
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                  Draft
                </span>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Cox’s Bazar • Weekend</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Fri–Sun • 3 travelers • 2 meetups planned
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-slate-700">Dec</span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white p-3 border border-slate-100">
                    <p className="text-xs text-slate-500">Stay</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Hotel</p>
                  </div>
                  <div className="rounded-xl bg-white p-3 border border-slate-100">
                    <p className="text-xs text-slate-500">Budget</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">$180</p>
                  </div>
                  <div className="rounded-xl bg-white p-3 border border-slate-100">
                    <p className="text-xs text-slate-500">Buddy</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Matched</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                  <p className="text-xs font-semibold text-slate-900">Suggested buddies</p>
                  <p className="mt-1 text-xs text-slate-500">
                    People going to similar places
                  </p>
                  <div className="mt-3 flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-sky-200 ring-2 ring-white" />
                    <div className="h-8 w-8 rounded-full bg-blue-200 ring-2 ring-white" />
                    <div className="h-8 w-8 rounded-full bg-cyan-200 ring-2 ring-white" />
                    <div className="h-8 w-8 rounded-full bg-slate-200 ring-2 ring-white" />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                  <p className="text-xs font-semibold text-slate-900">Upcoming meetup</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Confirm time & place in seconds
                  </p>
                  <div className="mt-3 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 border border-slate-100">
                    6:30 PM • Sea Point Cafe
                  </div>
                </div>
              </div>
            </div>

            {/* subtle floating label */}
            <div className="pointer-events-none absolute -bottom-5 left-6 rounded-2xl border border-slate-200 bg-white/80 px-4 py-2 text-xs text-slate-700 shadow-sm backdrop-blur">
              ✨ Built for planning + meeting up
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
