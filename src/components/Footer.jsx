import socials from '../data/socials.js'
import { GITHUB_URL } from '../config.js'

export default function Footer(){
  return (
    <footer className="border-t border-gray-800 py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} pinak • contact me as needed</p>
        <nav className="flex items-center gap-4">
          {socials.map(s => (
            <a key={s.label} className="underline" href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
