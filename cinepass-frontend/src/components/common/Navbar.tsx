import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Movies' },
  { href: '/events', label: 'Events' },
  { href: '/offers', label: 'Offers' },
  { href: '/admin', label: 'Admin' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 via-rose-500 to-orange-400 text-lg font-black text-white shadow-lg shadow-red-500/25">C</span>
          <div>
            <p className="text-lg font-black tracking-[0.2em] text-white">CINEPASS</p>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Movie & event booking</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-red-500/50 hover:bg-white/5 hover:text-white">
            Sign In
          </Link>
          <Link href="/register" className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/25 transition hover:bg-red-500">
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
}
