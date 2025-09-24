import facts from '../data/funfacts.js'

export default function FunFacts(){
  return (
    <section id="funfacts" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">fun facts</h2>
      <ul className="list-disc pl-5 text-gray-300 space-y-1">
        {facts.map(f => <li key={f}>{f}</li>)}
      </ul>
    </section>
  )
}
