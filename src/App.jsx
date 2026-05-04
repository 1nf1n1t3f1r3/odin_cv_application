import { useState } from "react";

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
    </div>
  );
}

export default App;
