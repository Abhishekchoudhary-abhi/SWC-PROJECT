export default function AdminPage() {
  const stats = [
    ['Movies live', '12'],
    ['Seats sold today', '1,428'],
    ['Active events', '6'],
  ];

  return (
    <div className="page-shell space-y-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-300">Admin</p>
        <h1 className="page-title mt-3">Operations overview.</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map(([label, value]) => (
          <div key={label} className="section-card p-6">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-4 text-4xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
