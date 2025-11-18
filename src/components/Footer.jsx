export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <p className="text-lg font-bold text-white">Jharkhand Mukti Morcha (JMM)</p>
          <p className="mt-2 text-slate-400 text-sm">Official website framework. For public information and movement updates.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Organisation</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#leadership" className="hover:text-white">Leadership</a></li>
            <li><a href="#news" className="hover:text-white">Newsroom</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Engage</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#involved" className="hover:text-white">Volunteer</a></li>
            <li><a href="#donate" className="hover:text-white">Donate</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Legal</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Jharkhand Mukti Morcha. All rights reserved.</p>
          <p>Made for demonstration — content subject to update.</p>
        </div>
      </div>
    </footer>
  )
}
