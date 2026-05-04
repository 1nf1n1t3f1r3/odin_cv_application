import { useState } from "react";
import html2pdf from "html2pdf.js";

import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview.jsx";

import "./styles/App.css";

function App() {
  const [editingSection, setEditingSection] = useState(null);
  const [isPreview, setIsPreview] = useState(false);

  const exportPDF = () => {
    const element = document.getElementById("cv-preview");

    const opt = {
      margin: 0.5,
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="app-container">
      <h1>CV Builder</h1>

      <div className="controls">
        <button onClick={() => setIsPreview(!isPreview)}>
          {isPreview ? "Back to Edit" : "Preview CV"}
        </button>

        <button onClick={exportPDF}>Download PDF</button>
      </div>

      {isPreview ? (
        <Preview />
      ) : (
        <>
          <GeneralInfo
            editingSection={editingSection}
            setEditingSection={setEditingSection}
          />

          <Education
            editingSection={editingSection}
            setEditingSection={setEditingSection}
          />

          <Experience
            editingSection={editingSection}
            setEditingSection={setEditingSection}
          />
        </>
      )}
    </div>
  );
}

export default App;
