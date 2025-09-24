import { skills, domains } from '../data/skills.js'

function Chips({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(i => (
        <span key={i} className="text-xs px-2 py-1 rounded-full border border-gray-700">{i}</span>
      ))}
    </div>
  )
}

export default function Skills(){
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">skills & domains</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="rounded-2xl border border-gray-800 p-4">
          <h3 className="font-semibold mb-2">skills</h3>
          <Chips items={skills} />
        </div>
        <div className="rounded-2xl border border-gray-800 p-4">
          <h3 className="font-semibold mb-2">domains</h3>
          <Chips items={domains} />
        </div>
      </div>
    </section>
  )
}
