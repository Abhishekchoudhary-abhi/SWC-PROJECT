import { events } from '@/data/catalog';

export default function EventsPage() {
  return (
    <div className="page-shell space-y-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-300">Events</p>
        <h1 className="page-title mt-3">Discover live experiences and special screenings.</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {events.map((event) => (
          <article key={event.title} className="section-card p-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-300">{event.city}</p>
            <h2 className="mt-3 text-2xl font-black text-white">{event.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{event.note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
