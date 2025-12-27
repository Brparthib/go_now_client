const testimonials = [
  {
    name: "Nafisa Rahman",
    role: "Backpacker",
    text: "GoNow made my Dhaka → Bandarban plan super clean. I found two buddies and we synced everything in minutes.",
  },
  {
    name: "Tanvir Hasan",
    role: "Weekend Traveler",
    text: "No more messy chat threads. Meetups + itinerary in one place feels premium even though it’s simple.",
  },
  {
    name: "Sadia Karim",
    role: "Solo Explorer",
    text: "The matching feels relevant. I actually met travelers going the same time and it made the trip safer.",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-sky-700">TESTIMONIALS</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Loved by planners and explorers
          </h2>
          <p className="mt-3 text-slate-600">
            Real stories from travelers who plan together with GoNow.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-sky-100" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                “{t.text}”
              </p>

              <div className="mt-4 flex gap-1 text-sky-600">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
