import React from "react";
import "./Schedule.css";
import { Link } from "react-router-dom";

// at top of the file:
const base = import.meta.env.BASE_URL; // "/MUSA-5500-Geospatial-Data-Science-Python/" in prod

const schedule = [
  { w: 1, date: "8/28/25", topic: "Course introduction and programming environment setup", lab: "Configure Anaconda, Jupyter, VS Code; Python basics (modules, read/write txt/csv, file ops, exceptions, functions)" },
  { w: 2, date: "9/4/25", topic: "Data Visualization Fundamentals", lab: "Read file and create visualizations using Pandas, Matplotlib" },
  { w: 3, date: "9/11/25", topic: "More on Data Visualization and Intro to Vector Data & GeoPandas", lab: "Read file and create visualizations using Pandas, Matplotlib" },
  { w: 4, date: "9/18/25", topic: "Geospatial data mapping", lab: "Use GeoPandas and Leaflet to do analysis and create maps" },
  { w: 5, date: "9/25/25", topic: "Raster data operations in Python", lab: "Rasterio, NumPy, Xarray to manipulate raster data" },
  { w: 6, date: "10/2/25", topic: "Advanced geospatial analysis", lab: "NetworkX, OSMnx; Fiona+Shapely+Rasterio; Zonal statistics; road network analysis" },
  { w: 7, date: "10/9/25", topic: "Fall break — No class", lab: "—" },
  { w: 8, date: "10/16/25", topic: "Web Scraping (I)", lab: "API, parse HTML, store data in database" },
  { w: 9, date: "10/23/25", topic: "Web Scraping (II)", lab: "Scrape and analyze real data (e.g., GSV)" },
  { w: 10, date: "10/30/25", topic: "Analyzing & Visualizing Large Datasets; CensusAPI", lab: "Visualize large raster and vector data" },
  { w: 11, date: "11/6/25", topic: "Web hosting: GitHub, Quarto, create web pages", lab: "Publish notebooks & sites" },
  { w: 12, date: "11/13/25", topic: "Machine Learning (I)", lab: "Predictive Modeling with scikit-learn" },
  { w: 13, date: "11/20/25", topic: "Machine Learning (II)", lab: "Predictive Modeling with scikit-learn" },
  { w: 14, date: "11/27/25", topic: "Thanksgiving break — No class", lab: "—" },
  { w: 15, date: "12/4/25", topic: "Neural Network and Deep Learning", lab: "Build an image-classification NN" },
  { w: 16, date: "12/4/25", topic: "Final Project Presentations (last day of class)", lab: "—" },
];


export default function Schedule() {
  return (
    <div className="container schedule-page">
      <h2>Schedule</h2>
      <p>Below is the tentative weekly schedule for MUSA 550.</p>

      <div className="table-wrap">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Week</th>
              <th>Date</th>
              <th>Topic</th>
              {/* <th>Resources</th> */}
            </tr>
          </thead>

          <tbody>
            {schedule.map((item) => (
              <tr key={item.lectureId} id={item.lectureId}>
                <td>{item.w}</td>
                <td>{item.date}</td>
                {/* <td>{item.topic}
                </td> */}

                <td>
                  {/* <Link to={`/lecture/${item.lectureId}`}>{item.topic}</Link> */}

                  {/* <a href={`/lectures/lecture${item.w}.html`} target="_blank" rel="noopener noreferrer">
                    {item.topic}
                  </a> */}
                    <a  href={`${base}lectures/lecture${item.w}.html`}  // or use item.lectureId if you have it
                        target="_blank" rel="noopener noreferrer" >
                        {item.topic}
                    </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}