import { useState } from 'react'
import posts from '../data/posts.js'
import MarkdownPost from './MarkdownPost.jsx'

export default function BlogSection(){
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section id="blog" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Blog</h2>

      <div className="space-y-4">
        {posts.map((p, idx) => {
          const isOpen = openIdx === idx
          return (
            <div key={p.title} className="rounded-2xl border border-gray-800">
              <button
                className="w-full text-left px-4 py-3 flex items-center justify-between gap-3"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
                aria-controls={`post-panel-${idx}`}
              >
                <div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-xs text-gray-400">{p.date} {p.summary ? `• ${p.summary}` : ""}</div>
                </div>
                <span className={`transition-transform ${isOpen ? "rotate-90" : ""}`}>›</span>
              </button>

              {isOpen && (
                <div id={`post-panel-${idx}`} className="px-4 pb-4">
                  <MarkdownPost file={p.file} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
