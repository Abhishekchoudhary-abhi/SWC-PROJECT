import { offers } from '@/data/catalog';

export default function OffersPage() {
  return (
    <div className="page-shell space-y-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-300">Offers</p>
        <h1 className="page-title mt-3">Rewards designed to keep the experience premium.</h1>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {offers.map((offer) => (
          <div key={offer} className="section-card p-6 text-sm leading-7 text-slate-300">{offer}</div>
        ))}
      </div>
    </div>
  );
}
