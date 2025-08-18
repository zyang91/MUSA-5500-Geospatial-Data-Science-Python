import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LecturePage() {
  const { lectureId } = useParams();
  const [htmlContent, setHtmlContent] = useState(null);  // null initially

  useEffect(() => {
    fetch(`/lectures/${lectureId}.html`)
      .then((res) => res.text())
      .then((html) => setHtmlContent(html));
  }, [lectureId]);

  // Show nothing until the HTML is fully loaded
  if (htmlContent === null) return null;

  return (
    <div className="container">
      {/* No heading here — removed completely */}
      <div
        className="lecture-html"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}

