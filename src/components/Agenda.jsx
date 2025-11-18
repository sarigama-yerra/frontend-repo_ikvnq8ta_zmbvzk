export default function Agenda(){
  const agenda = [
    {
      title: "Employment & Skills",
      points: [
        "Expand MGNREGA and skill-linked apprenticeships for youth",
        "Local recruitment and fair wages in public and private sector",
        "Support for self-help groups and micro-enterprises",
      ],
    },
    {
      title: "Health & Education",
      points: [
        "Strengthen primary health centres and maternal care",
        "Modernize schools, scholarships and hostel facilities",
        "Nutrition security for children and vulnerable families",
      ],
    },
    {
      title: "Land, Forest & Resources",
      points: [
        "Implement PESA and Forest Rights Act in letter and spirit",
        "Equitable share from mining; strict environmental safeguards",
        "Transparent, participatory rehabilitation and resettlement",
      ],
    },
  ];
  return (
    <section id="agenda" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">People's Agenda</h2>
          <p className="mt-4 text-slate-700">A grounded, time-bound programme to deliver measurable outcomes across social protection, human development and sustainable growth.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {agenda.map((a) => (
            <div key={a.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-emerald-800">{a.title}</h3>
              <ul className="mt-3 list-disc list-inside text-slate-700 space-y-2">
                {a.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
