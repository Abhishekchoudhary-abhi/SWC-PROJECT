import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="page-shell">
      <section className="section-card mx-auto max-w-xl p-8">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-300">Create account</p>
        <h1 className="page-title mt-3 text-4xl">Join CinePass.</h1>
        <form className="mt-8 grid gap-4">
          <input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Full name" />
          <input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Email address" />
          <input type="password" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Password" />
          <button className="glass-button bg-red-600 text-white hover:bg-red-500">Create Account</button>
        </form>
        <p className="mt-4 text-sm text-slate-400">Already have an account? <Link href="/login" className="text-red-300 hover:text-white">Sign in</Link></p>
      </section>
    </div>
  );
}
