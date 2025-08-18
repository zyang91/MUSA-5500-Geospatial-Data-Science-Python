import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Assignments.css";

const assignments = [
  {
    id: "a1",
    title: "HW #1 — Python Basics & Setup",
    assigned: "Wed, Sep 6",
    due: "Mon, Sep 25 @ 11:59 PM",
    detailsMd: `
**Assigned on:** Wednesday, September 6  
**Due:** Monday, September 25 at 11:59 PM  
**Section 401:** Monday, September 25 at 11:59 PM

**Materials:** [MUSA-550-Fall-2023/assignment-1](https://github.com/musa-550-fall-2023/assignment-1)  
**Submission:** [GitHub Classroom](https://classroom.github.com/a/jpzX7AF4)

---
### Part 1: Installing Python locally and launching Jupyter
- Follow the initial installation guide on the course website to set up Python locally and launch JupyterLab.
- See the recommended readings for \`Python\`, mamba/conda, and \`Jupyter\`.
- Read [Link](https://www.huffpost.com/entry/cities-are-starting-to-pay-attention-to-the-eviction-crisis-thats-devastated-poor-tenants_n_5b1a7b21e4b0bbb7a0dbd59e)

### Working Locally
- After activating the course environment, run \`jupyter lab\`.
- Open the notebook \`assignment-1.ipynb\`.
- Jupyter runs from the current working directory; get it with \`pwd\`.
- If you cloned the repo, start Jupyter in that folder.


### Part 2: Exploring the Donut Effect (Philadelphia ZIPs)
- Explore the Donut Effect for home values.
- Submit a Jupyter notebook (\`.ipynb\`). A starter notebook is in the repo.


### Submission Notes
- Submit via **GitHub Classroom**. Each assignment creates a private repo for you and instructors.
- **Important:** Commit to the newly created private repo (not your fork of the starter).
- Ensure your notebook is pushed before the deadline.
    `
  },
  // Add more assignments with `detailsMd` (markdown)…
  {
    id: "a2",
    title: "HW #2 — Pandas & Visualization",
    assigned: "Wed, Oct 2",
    due: "Mon, Oct 14 @ 11:59 PM",
    detailsMd: `
**Materials:** [assignment-2 (starter)](#)  
**Submission:** GitHub Classroom

### Overview
Work with tabular datasets in **Pandas** and create exploratory plots using **Matplotlib**.  
Please include inline interpretations below each figure.

- Load, clean, and describe the dataset  
- Create at least **3** diagnostic plots  
- Discuss findings (3–5 bullet points)
    `
  }
];

export default function Assignments() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <div className="container assignments-page">
      <h2>Assignments</h2>
      <p>Click a row to view full instructions, links, and submission notes.</p>

      <div className="table-wrap">
        <table className="assignments-table">
          <thead>
            <tr>
              <th style={{width:"40%"}}>Assignment</th>
              <th style={{width:"20%"}}>Assigned</th>
              <th style={{width:"25%"}}>Due</th>
              <th style={{width:"15%"}}>Details</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map(a => {
              const expanded = openId === a.id;
              const panelId = `${a.id}-panel`;
              return (
                <React.Fragment key={a.id}>
                  <tr className={`a-summary ${expanded ? "is-open" : ""}`}>
                    <td>
                      <button
                        className="a-toggle"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        onClick={() => toggle(a.id)}
                      >
                        <span className="a-title">{a.title}</span>
                        <span className="a-chevron" aria-hidden>▸</span>
                      </button>
                    </td>
                    <td>{a.assigned}</td>
                    <td>{a.due}</td>
                    <td className="a-actions">
                      <button
                        className="a-ghost"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        onClick={() => toggle(a.id)}
                      >
                        {expanded ? "Hide" : "View"}
                      </button>
                    </td>
                  </tr>

                  {expanded && (
                    <tr className="a-details-row">
                      <td id={panelId} colSpan={4}>
                        <div className="a-details markdown-body">
                          <ReactMarkdown>{a.detailsMd}</ReactMarkdown>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}