import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 px-6 py-16 shadow-2xl shadow-black/30 sm:px-10 lg:px-14 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.18),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-red-300">Premium access</span>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">Book movies, concerts, and live experiences in one cinematic space.</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            CinePass brings a dark, premium booking experience to movies and events. Find showtimes, reserve seats, and keep the entire journey under one roof.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#movies" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-200">Explore Movies</Link>
            <Link href="/events" className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/5">Browse Events</Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Live Seats', 'Real-time booking flow ready for seat selection.'],
            ['Premium Design', 'High-contrast layouts built for Vercel deployment.'],
            ['Fast Checkout', 'A streamlined flow from showtime to payment.'],
            ['TypeScript', 'App Router structure with clean, typed data.'],
          ].map(([title, description]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-lg font-bold text-white">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
