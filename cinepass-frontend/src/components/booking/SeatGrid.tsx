'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
const cols = 8;

export default function SeatGrid({
  movieId,
  showId,
  title,
  theater,
  time,
}: {
  movieId: number;
  showId: number;
  title: string;
  theater: string;
  time: string;
}) {
  const router = useRouter();
  const seats = useMemo(() => {
    return rows.flatMap((row) =>
      Array.from({ length: cols }, (_, index) => ({
        id: `${row}${index + 1}`,
        blocked: Math.random() > 0.78,
      })),
    );
  }, []);
  const [selected, setSelected] = useState<string[]>([]);

  const total = selected.length * 350;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
        <div className="mb-4 text-center text-xs uppercase tracking-[0.45em] text-slate-500">Screen this way</div>
        <div className="h-2 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-orange-400 shadow-[0_0_30px_rgba(239,68,68,0.35)]" />
      </div>

      <div className="overflow-x-auto">
        <div className="grid min-w-[640px] gap-4">
          {rows.map((row) => (
            <div key={row} className="flex items-center gap-3">
              <span className="w-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-500">{row}</span>
              <div className="grid flex-1 grid-cols-8 gap-2">
                {seats
                  .filter((seat) => seat.id.startsWith(row))
                  .map((seat) => {
                    const isSelected = selected.includes(seat.id);
                    return (
                      <button
                        key={seat.id}
                        disabled={seat.blocked}
                        onClick={() =>
                          setSelected((current) =>
                            current.includes(seat.id)
                              ? current.filter((id) => id !== seat.id)
                              : [...current, seat.id],
                          )
                        }
                        className={`h-10 rounded-t-xl border text-[11px] font-bold transition ${
                          seat.blocked
                            ? 'cursor-not-allowed border-red-500/20 bg-red-950/50 text-red-300/30'
                            : isSelected
                              ? 'border-red-400 bg-red-600 text-white shadow-lg shadow-red-500/20'
                              : 'border-white/10 bg-white/5 text-slate-200 hover:border-red-500/40 hover:bg-white/10'
                        }`}
                      >
                        {seat.id}
                      </button>
                    );
                  })}
              </div>
              <span className="w-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-500">{row}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className="text-xl font-black text-white">{theater} · {time}</p>
          <p className="mt-1 text-sm text-slate-400">Selected seats: {selected.length}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Estimated total</p>
            <p className="text-3xl font-black text-white">₹{total}</p>
          </div>
          <button
            onClick={() => {
              const bookingId = `BK-${movieId}-${showId}`;
              const seatsQuery = selected.join(',') || 'A1';
              router.push(`/payment/${bookingId}?movie=${encodeURIComponent(title)}&theater=${encodeURIComponent(theater)}&time=${encodeURIComponent(time)}&seats=${encodeURIComponent(seatsQuery)}&amount=${total || 350}`);
            }}
            className="rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-500"
          >
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  );
}
