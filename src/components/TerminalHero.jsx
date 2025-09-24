import { useEffect, useState } from 'react'
import { HERO_LINES } from '../config.js'

const TYPING_SPEED = 25 // ms per char
const PAUSE_BETWEEN_LINES = 900 // ms

export default function TerminalHero(){
  const [display, setDisplay] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if(lineIdx >= HERO_LINES.length) return
    if(charIdx < HERO_LINES[lineIdx].length){
      const id = setTimeout(() => {
        setDisplay(prev => prev + HERO_LINES[lineIdx][charIdx])
        setCharIdx(charIdx + 1)
      }, TYPING_SPEED)
      return () => clearTimeout(id)
    } else {
      const id = setTimeout(() => {
        setDisplay(prev => prev + '\n')
        setLineIdx(lineIdx + 1)
        setCharIdx(0)
      }, PAUSE_BETWEEN_LINES)
      return () => clearTimeout(id)
    }
  }, [lineIdx, charIdx])

  return (
    <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3">i build secure systems & do pen-testing/bug-bounty.</h1>
        <p className="text-gray-400">malware evolution analysis • rust & c systems • clean, practical tooling.</p>
        <div className="mt-6 flex gap-3 text-sm">
          <a href="#projects" className="px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500">View Projects</a>
          <a href="#contact" className="px-3 py-1.5 rounded-lg bg-white text-gray-900">Contact</a>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <div className="rounded-2xl border border-gray-800 overflow-hidden">
          <div className="px-4 py-2 text-xs bg-gray-900 border-b border-gray-800 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <span className="ml-2 text-gray-400">terminal — bash</span>
          </div>
          <pre className="bg-gray-950 p-4 text-sm md:text-base font-mono leading-7 whitespace-pre-wrap min-h-[260px]">{display}<span className="animate-pulse">▋</span></pre>
        </div>
      </div>
    </div>
  )
}
