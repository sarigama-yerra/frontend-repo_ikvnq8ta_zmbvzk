export default function Mission(){
  const pillars = [
    {
      title: "Livelihood & Welfare",
      body: "Secure land, forest and mineral rights; expand rural employment; strengthen health, education and nutrition systems with dignity and accountability.",
    },
    {
      title: "Identity & Inclusion",
      body: "Protect cultural heritage, languages and traditions; ensure representation and participation of Adivasi, Dalit, OBC, minorities and women.",
    },
    {
      title: "Sustainable Development",
      body: "Balance ecological conservation with equitable growth; ensure fair benefit-sharing from natural resources; prioritize green jobs.",
    },
    {
      title: "Good Governance",
      body: "Transparent, responsive administration; justice delivery; decentralization and Gram Sabha empowerment; zero tolerance for corruption.",
    },
  ];
  return (
    <section id="mission" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Vision and Mission</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">Our programme articulates a disciplined path to development anchored in constitutional values and the lived realities of Jharkhand. The following pillars guide our work.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-emerald-800">{p.title}</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
