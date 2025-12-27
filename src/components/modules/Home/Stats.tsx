const stats = [
  { label: "Trips planned", value: "12k+" },
  { label: "Buddy matches", value: "48k+" },
  { label: "Meetups created", value: "9k+" },
  { label: "Avg. time saved", value: "3.5h" },
];

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-linear-to-r from-sky-50 via-white to-blue-50 p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-semibold tracking-tight text-slate-900">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
