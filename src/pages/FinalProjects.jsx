import React from "react";
import "./FinalProject.css";

const classroomLinks = [
  { section: "401", url: "https://classroom.github.com/a/iA1Z_0Dv" },
  { section: "402", url: "https://classroom.github.com/a/FX7-CcSS" },
];

const requirements = [
  "Data is collected through a means more sophisticated than downloading (e.g., scraping, API).",
  "At least one of the datasets contains more than 1,000,000 rows.",
  "It combines data collected from 3 or more different sources.",
  "The analysis of the data is reasonably complex (geospatial joins/operations, data shaping, etc.).",
  "Use OSMnx or pandana to analyze street networks.",
  "Use scikit-learn to perform a clustering analysis.",
  "Analyze raster data using rasterio, rasterstats, or xarray.",
  "Perform a machine learning analysis with scikit-learn.",
  "Include a deployed Panel dashboard.",
  "Include multiple interactive visualizations with significant interactivity (cross-filtering, widgets, etc.).",
];

const examples = [
  {
    title: "An Analysis System for Taxi Data",
    blurb:
      "A planning, visualization, and prediction toolkit around taxi ridership.",
    href: "#",
  },
  {
    title: "Hospitality in the Era of Airbnb",
    blurb:
      "Measuring Airbnb’s impact on the NYC hospitality industry.",
    href: "#",
  },
  {
    title: "Reddit’s Values, IRL Events, and Bad Actors",
    blurb:
      "Mining Reddit to infer user values and detect suspicious behavior.",
    href: "#",
  },
  {
    title: "Orange Line Shutdown & Bluebike Ridership",
    blurb:
      "Estimating the transit disruption effects on bike-share demand in Boston.",
    href: "#",
  },
];

export default function FinalProject() {
  return (
    <div className="container project-page">
      {/* Hero */}
      <h1>Final Project</h1>

      <header className="project-hero">
        <div className="badge">Final Project · 45% of final grade</div>
        <p className="lede">
          Replicate the full data-science pipeline on a dataset (or datasets) of your choosing.
          Your final deliverable is a <strong>web-based data visualization</strong> plus a clear write-up of
          <em> collection</em>, <em> analysis</em>, and <em> visualization</em> steps.
        </p>
      </header>

      {/* Due dates */}
      <section className="section">
        <h2>Due Dates</h2>
        <div className="dates-grid">
          <div className="date-card">
            <div className="date-label">Proposal</div>
            <div className="date-value">Mon, Dec 4 (or earlier)</div>
            <p className="muted">Proposals must be approved in writing before you proceed.</p>
          </div>
          <div className="date-card">
            <div className="date-label">Final Project</div>
            <div className="date-value">Wed, Dec 20 @ 11:59 PM</div>
            <p className="muted">Dates are tentative and subject to change.</p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section">
        <h2>Deliverables</h2>
        <ol className="list-tight">
          <li>
            <strong>Quarto website</strong> hosted on GitHub Pages, generated from the Quarto website template.
            Use text, images, and interactive visualizations to explain your process and results.
          </li>
          <li>
            <strong>All project materials</strong> (code, notebooks, spreadsheets, datasets) in your own GitHub repo
            created via your section’s Classroom link:
            <ul>
              {classroomLinks.map((l) => (
                <li key={l.section}>
                  Section {l.section}:{" "}
                  <a href={l.url} target="_blank" rel="noreferrer">
                    GitHub Classroom invite
                  </a>
                </li>
              ))}
            </ul>
            Include a <code>README</code> with the URL of your Quarto website.
          </li>
        </ol>
        <div className="callout">
          <strong>Important:</strong> Put your Quarto website URL in the submission repository’s <code>README</code>, and
          list the names of all contributors.
        </div>
      </section>

      {/* Group projects */}
      <section className="section">
        <h2>Group Projects</h2>
        <p>
          Groups up to <strong>3</strong> are permitted. You may combine with work from another course,
          but the portion submitted here must be a clearly defined addition. Scope expectations scale with team size.
        </p>
      </section>

      {/* Requirements */}
      <section className="section">
        <h2>Guidelines & Requirements</h2>
        <div className="req-grid">
          <div className="req-card">
            <div className="req-title">Minimum requirements by group size</div>
            <ul className="req-counts">
              <li><span className="count">2</span> requirements for <strong>1 person</strong></li>
              <li><span className="count">3</span> requirements for <strong>2 people</strong></li>
              <li><span className="count">4</span> requirements for <strong>3 people</strong></li>
            </ul>
            <p className="muted">Shoot for a project roughly 3–4× the scope of a regular assignment.</p>
          </div>
          <div className="req-card">
            <div className="req-title">Possible requirements</div>
            <ul className="bullets">
              {requirements.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Grading */}
      <section className="section">
        <h2>Grading (45%)</h2>
        <div className="table-wrap">
          <table className="rubric-table">
            <thead>
              <tr>
                <th>Criterion</th>
                <th>What we’re looking for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Concept</strong></td>
                <td>Sufficient complexity and creativity; interesting, useful, or novel outcome.</td>
              </tr>
              <tr>
                <td><strong>Technical implementation</strong></td>
                <td>Sound pipeline; correct methods; consistent with proposal; works as described.</td>
              </tr>
              <tr>
                <td><strong>Visualization</strong></td>
                <td>Clear storytelling; effective layouts, labels, and color choices; interactivity where appropriate.</td>
              </tr>
              <tr>
                <td><strong>Write-up</strong></td>
                <td>Multi-page Quarto site that clearly documents collection, analysis, and visualization steps and results.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Past examples */}
      <section className="section">
        <h2>Examples from Past Semesters</h2>
        <p className="muted">
          Prior years used a different template; visual style may differ from this semester’s Quarto site requirement.
        </p>
        <div className="examples-grid">
          {examples.map((ex) => (
            <a
              key={ex.title}
              className="example-card"
              href={ex.href}
              target="_blank"
              rel="noreferrer"
            >
              <h3>{ex.title}</h3>
              <p>{ex.blurb}</p>
              <span className="more">View project →</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}