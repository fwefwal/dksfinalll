import React from 'react'
import { works } from '../data/works'
import WorkCard from '../components/WorkCard'

function Works() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title section-title--page">Work</h1>

        <div className="works-list works-list--page">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
