import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Destinations", href: "/destinations" },
      { label: "Meetups", href: "/meetups" },
    ],
  },
  {
    title: "Community",
    items: [
      { label: "Explore Travelers", href: "/explore" },
      { label: "Find Travel Buddy", href: "/find-buddy" },
      { label: "Trips", href: "/trips" },
      { label: "Guidelines", href: "/guidelines" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-lg font-semibold text-slate-900">
              GoNow
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 max-w-sm">
              A travel management system to plan trips, find buddies, and organize meetups—
              in one clean workspace.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold text-slate-900">{group.title}</p>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-600 hover:text-slate-900 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} GoNow. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-900">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
