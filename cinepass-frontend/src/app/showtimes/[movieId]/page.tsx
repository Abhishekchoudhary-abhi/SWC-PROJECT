import { getMovieById } from '@/data/catalog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ShowtimesPage({ params }: { params: { movieId: string } }) {
  const movie = getMovieById(Number(params.movieId));

  if (!movie) {
    notFound();
  }

  return (
    <div className="page-shell space-y-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-300">Showtimes</p>
        <h1 className="page-title mt-3">Choose a screening for {movie.title}.</h1>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {movie.showtimes.map((showtime) => (
          <div key={showtime.id} className="section-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-300">{showtime.label}</p>
                <h2 className="mt-2 text-2xl font-black text-white">{showtime.theater}</h2>
                <p className="mt-1 text-sm text-slate-400">{showtime.time}</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">From</p>
                <p className="text-2xl font-black text-white">{showtime.price}</p>
              </div>
            </div>
            <Link href={`/booking/${movie.id}?showId=${showtime.id}&theater=${encodeURIComponent(showtime.theater)}&time=${encodeURIComponent(showtime.time)}`} className="glass-button mt-5 bg-red-600 text-white hover:bg-red-500">Select seats</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
