import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Mission from './components/Mission'
import Leadership from './components/Leadership'
import Agenda from './components/Agenda'
import Newsroom from './components/Newsroom'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <section id="about" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-black">About the Organisation</h2>
                <p className="mt-4 text-slate-700 leading-relaxed">Jharkhand Mukti Morcha (JMM) is a democratic political organisation founded to secure statehood for Jharkhand and to uphold the dignity and rights of its people. Rooted in grassroots struggles, the organisation advances a development model that is equitable, sustainable and culturally grounded.</p>
                <p className="mt-4 text-slate-700 leading-relaxed">We are committed to transparent governance, social justice, and the constitutional values that bind our republic. Our actions are guided by the voice of Gram Sabhas and the aspirations of youth, women and workers across Jharkhand.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
                <h3 className="text-xl font-bold text-emerald-800">Core Principles</h3>
                <ul className="mt-3 list-disc list-inside space-y-2 text-slate-700">
                  <li>Dignity of every citizen</li>
                  <li>Inclusive, welfare-oriented growth</li>
                  <li>Protection of land, forest and water</li>
                  <li>Democratic participation and accountability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Mission />
        <Leadership />
        <Agenda />
        <Newsroom />
        <CTA />
        <section id="donate" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black">Support the Movement</h2>
              <p className="mt-4 text-slate-700">Your contribution strengthens outreach, legal assistance and community programmes. Contributions are accepted as per applicable laws and transparency norms.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <a href="#" className="inline-flex items-center justify-center rounded-lg bg-emerald-700 text-white px-5 py-3 font-semibold hover:bg-emerald-800">Contribute Online</a>
                <a href="#" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-50">Download Details</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App