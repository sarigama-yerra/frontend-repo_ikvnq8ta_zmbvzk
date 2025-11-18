export default function CTA(){
  return (
    <section id="involved" className="relative overflow-hidden bg-emerald-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black">Become a Member. Strengthen the Movement.</h2>
            <p className="mt-4 text-emerald-100 leading-relaxed">Volunteer in your locality, participate in outreach, and help shape policy. Together we can secure dignity, development and justice for all.</p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg px-4 py-3 bg-white text-slate-900 placeholder-slate-500" placeholder="Full Name" required />
              <input className="w-full rounded-lg px-4 py-3 bg-white text-slate-900 placeholder-slate-500" placeholder="Phone Number" required />
              <input className="w-full rounded-lg px-4 py-3 bg-white text-slate-900 placeholder-slate-500 sm:col-span-2" placeholder="Email Address" />
              <input className="w-full rounded-lg px-4 py-3 bg-white text-slate-900 placeholder-slate-500 sm:col-span-2" placeholder="District / Block" />
            </div>
            <button className="mt-4 inline-flex items-center rounded-lg bg-white text-emerald-900 px-5 py-3 font-semibold shadow-sm hover:bg-emerald-50">Submit Interest</button>
          </form>
        </div>
      </div>
    </section>
  )
}
