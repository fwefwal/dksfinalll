import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { works } from '../data/works'

function WorkDetails() {
  const { id } = useParams()
  const work = works.find((w) => w.id === id)

  if (!work) {
    return (
      <section className="section">
        <div className="container">
          <p> not found{' '} <Link to="/works" className="link"></Link> </p>
        </div>
      </section>
    )
  }

  const [firstImage, ...restImages] = work.detailImages || []

  return (
    <section className="section">
      <div className="container work-details">

        <h1 className="work-details-title">{work.fullTitle || work.title}</h1>

        <div className="work-details-meta">
          <span className="work-card-year">{work.year}</span>
          <span className="work-card-category">{work.category}</span>
        </div>

        <p className="work-details-text">
          {work.longText1 || work.description}
        </p>

        {firstImage && (
          <img
            src={firstImage}
            alt={work.title}
            className="work-details-image"
          />
        )}

        <h2 className="work-details-heading1">Heading 1</h2>
        <h2 className="work-details-heading2">Heading 2</h2>

        <p className="work-details-text">
          {work.longText2 || work.description}
        </p>

        {restImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${work.title} detail ${index + 2}`}
            className="work-details-image"
          />
        ))}
      </div>
    </section>
  )
}

export default WorkDetails
