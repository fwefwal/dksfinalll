import React from 'react'
import { Link } from 'react-router-dom'

function WorkCard({ work }) {
  const isClickable = work.hasDetails

  return (
    <article className="work-card">
      {isClickable ? (
        <Link to={`/works/${work.id}`} className="work-card-image-link">
          <img src={work.image} alt={work.title} className="work-card-image" />
        </Link>
      ) : (
        <div className="work-card-image-link">
          <img src={work.image} alt={work.title} className="work-card-image" />
        </div>
      )}

      <div className="work-card-body">
        {isClickable ? (
          <Link to={`/works/${work.id}`} className="work-card-title">
            {work.title}
          </Link>
        ) : (
          <h3 className="work-card-title">{work.title}</h3>
        )}

        <div className="work-card-meta">
          <span className="work-card-year-darkbage">{work.year}</span>
          <span className="work-card-category">{work.shortCategory}</span>
        </div>

        <p className="work-card-text">{work.description}</p>
      </div>
    </article>
  )
}

export default WorkCard
