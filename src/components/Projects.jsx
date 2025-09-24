import data from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects(){
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Selected Projects</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {data.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </div>
  )
}
