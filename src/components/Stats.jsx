export default function Stats(){
  const items = [
    { number: "50+", label: "Years of Peoples' Struggle" },
    { number: "1000+", label: "Villages Reached in Outreach" },
    { number: "24x7", label: "Citizen Help & Assistance" },
    { number: "1 Vision", label: "Dignity • Development • Justice" },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((it) => (
            <div key={it.label} className="text-center p-4">
              <p className="text-3xl md:text-4xl font-black text-emerald-800">{it.number}</p>
              <p className="mt-2 text-slate-600 font-medium">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
