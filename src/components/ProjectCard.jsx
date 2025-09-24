export default function ProjectCard({ title, description, stack = [], link }){
  return (
    <article className="rounded-2xl border border-gray-800 p-4 hover:border-gray-600 transition-colors">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {stack.map(s => <span key={s} className="text-xs px-2 py-1 rounded-full border border-gray-700">{s}</span>)}
      </div>
      {link && <p className="mt-3"><a href={link} target="_blank" className="underline">Open ↗</a></p>}
    </article>
  )
}
