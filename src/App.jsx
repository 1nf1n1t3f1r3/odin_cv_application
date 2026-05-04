import { useState } from "react";
import html2pdf from "html2pdf.js";

import Preview from "./components/Preview";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

import "./styles/App.css";

function App() {
  const [editingSection, setEditingSection] = useState(null);

  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    study: "",
    date: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  const exportPDF = () => {
    const element = document.getElementById("cv-preview");

    if (!element) return;

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

      <GeneralInfo
        general={general}
        setGeneral={setGeneral}
        editingSection={editingSection}
        setEditingSection={setEditingSection}
      />

      <Education
        education={education}
        setEducation={setEducation}
        editingSection={editingSection}
        setEditingSection={setEditingSection}
      />

      <Experience
        experience={experience}
        setExperience={setExperience}
        editingSection={editingSection}
        setEditingSection={setEditingSection}
      />

      <Preview
        general={general}
        education={education}
        experience={experience}
      />

      <button className="download-btn" onClick={exportPDF}>
        Download PDF
      </button>
    </div>
  );
}

export default App;
