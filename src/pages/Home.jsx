import React from 'react'
// import "./syllabus.css"; // Optional: if you want local styles
import "./Home.css"
import { Link } from 'react-router-dom';

const base = import.meta.env.BASE_URL; // "/MUSA-5500-Geospatial-Data-Science-Python/" in prod

function Card({ title, description, link, linkText }) {
    return (
        <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={link} className="button">{linkText}</Link>
        </div>
    );
}

export default function Home(){
    return (
        <div className="container">
          <section className="hero">
            <h2 className="hero-title">Welcome to MUSA Geosptial Data Science in Python</h2>
            <div className='hero-content'>
                <div className='hero-text'>
                    <h2>
                        Use Python to gather, visualize, and analyze geospatial data with an urban planning and public policy focus
                    </h2>
                    <div className='hero-subtitle'>
                        Spatial Data Science in Python is a graduate-level course in the MUSA program at the University of Pennsylvania. 
                        Learn to work with spatial data in Python for analysis, visualization, and decision-making.
                    </div>
                    <br />

                    <div className="instructors-card" aria-labelledby="course-meta-heading">
                    <h3 id="course-meta-heading" className="meta-title">Course team & contact</h3>

                    <div className="meta-grid">
                      <div className="meta-block">
                        <div className="meta-label">Instructor</div>
                        <div className="meta-value">
                          Xiaojiang Li, PhD ·{" "}
                          <a href="mailto:jianglix@design.upenn.edu" className="contact-link">
                            jianglix@design.upenn.edu
                          </a>
                        </div>
                      </div>

                      <div className="meta-block">
                        <div className="meta-label">TA</div>
                        <div className="meta-value">
                          Shengao Yi ·{" "}
                          <a href="mailto:shengao@design.upenn.edu" className="contact-link">
                          shengao@design.upenn.edu
                          </a>
                        </div>

                        <div className="meta-value">
                          Frank Chen ·{" "}
                          <a href="mailto:fchen9@design.upenn.edu" className="contact-link">
                            fchen9@design.upenn.edu
                          </a>
                        </div>

                      </div>

                      <div className="meta-block meta-span">
                        <div className="meta-label">School</div>
                        <div className="meta-value">
                          Weitzman School of Design, University of Pennsylvania
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-image">
                <img
                  src={`${base}images/maps.png`}
                  alt="MUSA Geospatial" 
                />
            </div>
            </div>
          </section>
          
          <section className="section">
            <h3 className="section-title">Course Navigation</h3>
            <div className="card-grid">
                <Card 
                    title="Syllabus" 
                    description="Review course structure, grading policy, schedule, and required tools." 
                    link="/syllabus" 
                    linkText="View Syllabus"
                />


              <Card 
                title="Schedule" 
                description="Access weekly lectures, hands-on notebooks, and practical demos." 
                link="/schedule" 
                linkText="View Weekly Schedule"
              />


              <Card 
                title="Assignments" 
                description="Practice Python spatial workflows and submit interactive notebooks." 
                link="/assignments" 
                linkText="Assignments"
              />
              <Card 
                title="Final Project" 
                description="Tackle a real-world geospatial problem using Python and present your results." 
                link="/project" 
                linkText="Final Project"
              />

            </div>
          </section>
        </div>
      );
}
