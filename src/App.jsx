import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [editingSection, setEditingSection] = useState(null);

  return (
    <div>
      <h1>CV Builder</h1>

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
    </div>
  );
}

export default App;
