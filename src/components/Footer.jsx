import { GITHUB_URL } from '../config.js'
export default function Footer(){
  return (
    <footer className="border-t border-gray-800 py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} pjnak • contact me as needed</p>
        <p><a className="underline" href={GITHUB_URL} target="_blank" rel="noreferrer">github.com/pinakdg</a></p>
      </div>
    </footer>
  )
}
