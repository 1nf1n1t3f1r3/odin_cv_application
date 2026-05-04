//src/components/GeneralInfo.jsx

import { useState } from "react";
import Field from "./Field.jsx";

function Education({ editingSection, setEditingSection }) {
  const [school, setSchool] = useState("");
  const [study, setStudy] = useState("");
  const [date, setDate] = useState("");

  return (
    <div>
      <h2>General Info</h2>

      <Field
        label="School"
        type="text"
        value={school}
        isEditing={editingSection === "education-school"}
        onChange={(e) => setSchool(e.target.value)}
        onEditToggle={() =>
          setEditingSection(
            editingSection === "education-school" ? null : "education-school",
          )
        }
      />

      <Field
        label="Study"
        type="study"
        value={study}
        isEditing={editingSection === "education-study"}
        onChange={(e) => setStudy(e.target.value)}
        onEditToggle={() =>
          setEditingSection(
            editingSection === "education-study" ? null : "education-study",
          )
        }
      />

      <Field
        label="Date"
        type="text"
        value={date}
        isEditing={editingSection === "education-date"}
        onChange={(e) => setDate(e.target.value)}
        onEditToggle={() =>
          setEditingSection(
            editingSection === "education-date" ? null : "education-date",
          )
        }
      />
    </div>
  );
}

export default Education;
