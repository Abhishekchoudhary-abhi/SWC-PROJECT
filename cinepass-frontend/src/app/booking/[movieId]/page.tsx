import SeatGrid from '@/components/booking/SeatGrid';
import { getMovieById } from '@/data/catalog';
import { notFound } from 'next/navigation';

export default function BookingPage({
  params,
  searchParams,
}: {
  params: { movieId: string };
  searchParams?: { showId?: string; theater?: string; time?: string };
}) {
  const movie = getMovieById(Number(params.movieId));

  if (!movie) {
    notFound();
  }

  const showtime = movie.showtimes.find((item) => item.id === Number(searchParams?.showId)) ?? movie.showtimes[0];
  const theater = searchParams?.theater ?? showtime.theater;
  const time = searchParams?.time ?? showtime.time;

  return (
    <div className="page-shell space-y-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-300">Seat selection</p>
        <h1 className="page-title mt-3">Select seats for {movie.title}.</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">{theater} • {time}</p>
      </div>
      <SeatGrid movieId={movie.id} showId={showtime.id} title={movie.title} theater={theater} time={time} />
    </div>
  );
}
