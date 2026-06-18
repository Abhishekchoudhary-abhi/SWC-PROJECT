import Link from 'next/link';

export default function ConfirmationPage({ searchParams }: { searchParams?: { bookingId?: string; movie?: string; seats?: string; amount?: string } }) {
  return (
    <div className="page-shell">
      <section className="section-card mx-auto max-w-3xl p-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-emerald-300">Booking confirmed</p>
        <h1 className="page-title mt-3">Your tickets are booked.</h1>
        <p className="mt-4 text-slate-300">{searchParams?.movie ?? 'Movie'} • Seats {searchParams?.seats ?? 'A1'} • Payment received for ₹{searchParams?.amount ?? '350'}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="glass-button bg-red-600 text-white hover:bg-red-500">Back to home</Link>
          <Link href="/events" className="glass-button text-white">Explore more</Link>
        </div>
      </section>
    </div>
  );
}
