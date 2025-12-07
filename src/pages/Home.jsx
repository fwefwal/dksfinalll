import React from "react";
import avatar from "../assets/avatar.png";
import { posts } from "../data/posts";
import { Link } from 'react-router-dom';
import { works } from "../data/works";
import WorkCard from "../components/WorkCard.jsx";


function Home() {
  const featuredWorks = works.slice(0, 3);

  return (
    <>
      <section className="avatar">
        <div className="container avatar-inner">
          <div className="avatar-text">
            <h1 className="avatar-title">
              Hi, I am John,
              <br />
              Creative Technologist
            </h1>
            <p className="avatar-description">
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <Link className="avatar-button">Download Resume</Link>
          </div>

          <div className="avatar-avatar-wrapper">
            <img src={avatar} alt="John" className="avatar-avatar"/>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <h2 className="section-title">Recent posts</h2>

          <div className="posts-grid">
            {posts.map((post) => (
              <article key={post.id} className="post-card">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-meta">
                  {post.date}
                  {post.category}
                </p>
                <p className="post-text">{post.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured works</h2>

          <div className="works-list">
            {featuredWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
