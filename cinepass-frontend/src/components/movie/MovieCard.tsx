import Link from 'next/link';
import type { Movie } from '@/data/catalog';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`} className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10">
      <div className={`relative h-72 bg-gradient-to-br ${movie.accent} p-5`}>
        <div className="flex h-full flex-col justify-between rounded-[1.15rem] border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.28em] text-white/80">
            <span>{movie.genre}</span>
            <span>{movie.rating}/10</span>
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">{movie.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/85 line-clamp-3">{movie.description}</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          <span>{movie.runtime}</span>
          <span>•</span>
          <span>{movie.language}</span>
        </div>
        <span className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition group-hover:border-red-500/40 group-hover:text-red-200">View details</span>
      </div>
    </Link>
  );
}
