import Hero from '@/components/common/Hero';
import MovieCard from '@/components/movie/MovieCard';
import { events, movies, offers } from '@/data/catalog';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="page-shell space-y-10">
      <Hero />

      <section id="movies" className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-300">Now showing</p>
            <h2 className="page-title mt-2 text-3xl sm:text-4xl">Featured movies built for a premium booking flow.</h2>
          </div>
          <Link href="/events" className="glass-button text-sm text-white">View events</Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="section-card p-6">
          <h3 className="section-heading">Special offers</h3>
          <div className="space-y-3">
            {offers.map((offer) => (
              <div key={offer} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-200">{offer}</div>
            ))}
          </div>
        </div>

        <div className="section-card p-6">
          <h3 className="section-heading">Trending events</h3>
          <div className="space-y-3">
            {events.map((event) => (
              <div key={event.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-300">{event.city}</p>
                <p className="mt-2 text-lg font-bold text-white">{event.title}</p>
                <p className="mt-2 text-sm text-slate-300">{event.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
