export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-800 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#ffffff_0,transparent_40%),radial-gradient(circle_at_80%_0%,#22c55e_0,transparent_30%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-28">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-emerald-200/90 font-semibold text-xs mb-3">Official Platform</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            A Movement for Dignity, Development and Justice
          </h1>
          <p className="mt-6 text-lg text-emerald-100/90 leading-relaxed">
            Jharkhand Mukti Morcha (JMM) advances the aspirations of the people of Jharkhand — protecting rights, strengthening livelihoods, and building inclusive growth grounded in tribal ethos and constitutional values.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#involved" className="inline-flex items-center rounded-lg bg-white text-emerald-900 px-5 py-3 font-semibold shadow-sm hover:bg-emerald-50 transition-colors">Join the Movement</a>
            <a href="#mission" className="inline-flex items-center rounded-lg border border-white/30 text-white px-5 py-3 font-semibold hover:bg-white/10 transition-colors">Read our Vision</a>
          </div>
        </div>
      </div>
    </section>
  );
}
