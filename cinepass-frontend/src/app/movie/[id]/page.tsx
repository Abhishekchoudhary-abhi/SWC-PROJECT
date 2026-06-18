import { getMovieById } from '@/data/catalog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function MoviePage({ params }: { params: { id: string } }) {
  const movie = getMovieById(Number(params.id));

  if (!movie) {
    notFound();
  }

  return (
    <div className="page-shell space-y-8">
      <section className="section-card overflow-hidden p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-300">Movie details</p>
        <h1 className="page-title mt-3">{movie.title}</h1>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
          <span>{movie.genre}</span>
          <span>•</span>
          <span>{movie.runtime}</span>
          <span>•</span>
          <span>{movie.language}</span>
          <span>•</span>
          <span>Rating {movie.rating}</span>
        </div>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">{movie.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/showtimes/${movie.id}`} className="glass-button bg-red-600 text-white hover:bg-red-500">Book tickets</Link>
          <Link href="/" className="glass-button text-white">Back to movies</Link>
        </div>
      </section>
    </div>
  );
}
