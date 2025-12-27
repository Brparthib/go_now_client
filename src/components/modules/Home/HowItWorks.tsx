const steps = [
  {
    step: "01",
    title: "Create your trip",
    desc: "Add destination, dates, budget and a simple itinerary.",
  },
  {
    step: "02",
    title: "Match with travelers",
    desc: "Find compatible buddies going to similar places and times.",
  },
  {
    step: "03",
    title: "Plan meetups together",
    desc: "Coordinate meetup spots and schedules with clarity.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-sky-700">HOW IT WORKS</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            From idea to itinerary—fast
          </h2>
          <p className="mt-3 text-slate-600">
            A simple workflow that keeps planning lightweight and social.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-sky-700">STEP</span>
                <span className="text-sm font-semibold text-slate-900">{s.step}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              <div className="mt-5 h-2 w-24 rounded-full bg-sky-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
