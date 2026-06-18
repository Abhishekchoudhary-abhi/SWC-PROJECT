'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function PaymentPage({ params }: { params: { bookingId: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState('');

  const movie = searchParams.get('movie') ?? 'Your booking';
  const seats = searchParams.get('seats') ?? 'A1';
  const theater = searchParams.get('theater') ?? 'CinePass Theatre';
  const time = searchParams.get('time') ?? '7:30 PM';
  const amount = searchParams.get('amount') ?? '350';

  return (
    <div className="page-shell grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <section className="section-card p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-300">Payment</p>
        <h1 className="page-title mt-3">Complete your booking.</h1>
        <div className="mt-8 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-slate-300">Cardholder name<input value={name} onChange={(event) => setName(event.target.value)} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-red-500/50" placeholder="Name on card" /></label>
          <label className="grid gap-2 text-sm font-semibold text-slate-300">Card number<input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-red-500/50" placeholder="4111 1111 1111 1111" /></label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-300">Expiry<input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-red-500/50" placeholder="MM/YY" /></label>
            <label className="grid gap-2 text-sm font-semibold text-slate-300">CVV<input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-red-500/50" placeholder="123" /></label>
          </div>
          <button onClick={() => router.push(`/confirmation?bookingId=${params.bookingId}&movie=${encodeURIComponent(movie)}&seats=${encodeURIComponent(seats)}&amount=${encodeURIComponent(amount)}`)} className="glass-button bg-red-600 text-white hover:bg-red-500">Pay ₹{amount}</button>
        </div>
      </section>
      <aside className="section-card p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-300">Summary</p>
        <div className="mt-6 space-y-4 text-sm text-slate-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Movie</span><span className="font-semibold text-white">{movie}</span></div>
          <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Seats</span><span className="font-semibold text-white">{seats}</span></div>
          <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Theatre</span><span className="font-semibold text-white">{theater}</span></div>
          <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Showtime</span><span className="font-semibold text-white">{time}</span></div>
          <div className="flex items-center justify-between pt-2 text-base"><span>Total</span><span className="text-2xl font-black text-white">₹{amount}</span></div>
        </div>
      </aside>
    </div>
  );
}
