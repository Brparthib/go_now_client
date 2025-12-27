import Link from "next/link";

const features = [
  {
    title: "Smart Trip Planning",
    desc: "Create itineraries, add places, and keep everything organized in one timeline.",
  },
  {
    title: "Find Travel Buddies",
    desc: "Match with travelers based on destination, dates, interests, and travel style.",
  },
  {
    title: "Meetup Management",
    desc: "Plan meetups, share locations, and coordinate schedules without confusion.",
  },
  {
    title: "Budget & Checklist",
    desc: "Track estimated expenses and keep a shared checklist for the whole group.",
  },
  {
    title: "Saved Destinations",
    desc: "Bookmark places, experiences, and routes for upcoming trips.",
  },
  {
    title: "Private & Secure",
    desc: "Control visibility, share trips with trusted people, and keep your data safe.",
  },
];

export default function Features() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-sky-700">FEATURES</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to plan + travel together
          </h2>
          <p className="mt-3 text-slate-600">
            GoNow simplifies planning, matching, and meetups—so you can focus on the trip.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-2xl bg-sky-50" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition"
          >
            Start Planning
          </Link>
          <Link
            href="/explore"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Explore Travelers
          </Link>
        </div>
      </div>
    </section>
  );
}
