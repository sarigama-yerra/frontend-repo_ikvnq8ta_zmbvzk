export default function Leadership(){
  const leaders = [
    { name: "Shibu Soren", role: "Founding President", bio: "Veteran of the Jharkhand movement; nationally respected parliamentarian." },
    { name: "Hemant Soren", role: "Chief Minister (Former)", bio: "Committed to welfare-led growth, tribal rights and institutional reform." },
    { name: "Party Leadership", role: "Collective Leadership", bio: "Representatives from across Jharkhand's regions guide organisational decisions." },
  ];
  return (
    <section id="leadership" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Leadership</h2>
          <p className="mt-4 text-slate-700">The organisation is led by experienced public representatives and grassroots leaders who embody service, integrity and resolve.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {leaders.map((l) => (
            <div key={l.name} className="rounded-2xl border border-slate-200 p-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-900 font-black flex items-center justify-center text-xl">{l.name.split(" ").map(w=>w[0]).slice(0,2)}</div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{l.name}</h3>
              <p className="text-emerald-800 font-medium">{l.role}</p>
              <p className="mt-2 text-slate-700 text-sm leading-relaxed">{l.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
