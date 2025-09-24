import posts from '../data/posts.js'

export default function BlogSection(){
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Blog</h2>
      {/*<p className="text-gray-400 text-sm mb-4">
        Add posts by editing <code className="px-1 py-0.5 rounded bg-gray-900 border border-gray-800">src/data/posts.js</code>.
        Each post is a minimal object with <code>title</code>, <code>date</code>, and <code>summary</code>.
      </p> */}
      <div className="space-y-4">
        {posts.map(p => (
          <article key={p.title} className="p-4 rounded-2xl border border-gray-800">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-xs text-gray-400">{p.date}</p>
            <p className="text-sm mt-2 text-gray-300">{p.summary}</p>
          </article>
        ))}
      </div>
      {/* <div className="mt-4 text-xs text-gray-500">
        <p><strong>Note:</strong> If you want Markdown posts later, create a <code>/posts</code> folder and a simple loader,
        or hook a static site generator. For now, this keeps it one‑page and ultra‑simple.</p>
      </div> */}
    </div>
  )
}
