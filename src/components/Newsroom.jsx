export default function Newsroom(){
  const items = [
    { date: "12 Oct 2025", title: "Statement on Rural Employment Expansion", type: "Press Release" },
    { date: "05 Oct 2025", title: "Address at Youth Convention, Ranchi", type: "Speech" },
    { date: "28 Sep 2025", title: "Brief on Forest Rights Implementation", type: "Policy Note" },
  ];
  return (
    <section id="news" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Newsroom</h2>
            <p className="mt-4 text-slate-700">Official statements, speeches and policy briefs from the organisation.</p>
          </div>
          <a href="#" className="inline-flex items-center rounded-lg bg-emerald-700 text-white px-4 py-2 font-semibold hover:bg-emerald-800">View All</a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((n) => (
            <a key={n.title} href="#" className="group rounded-2xl border border-slate-200 p-6 hover:bg-slate-50 transition-colors">
              <p className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">{n.type}</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-emerald-800">{n.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{n.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
