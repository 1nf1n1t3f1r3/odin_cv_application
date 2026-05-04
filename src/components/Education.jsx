//src/components/GeneralInfo.jsx

import { useState } from "react";
import Field from "./Field.jsx";

function GeneralInfo() {
  const [school, setSchool] = useState("");
  const [study, setStudy] = useState("");
  const [date, setDate] = useState("");

  const [editingField, setEditingField] = useState(null);

  return (
    <div>
      <h2>General Info</h2>

      <Field
        label="School"
        type="text"
        value={school}
        isEditing={editingField === "school"}
        onChange={(e) => setSchool(e.target.value)}
        onEditToggle={() =>
          setEditingField(editingField === "school" ? null : "school")
        }
      />

      <Field
        label="Study"
        type="study"
        value={study}
        isEditing={editingField === "study"}
        onChange={(e) => setStudy(e.target.value)}
        onEditToggle={() =>
          setEditingField(editingField === "study" ? null : "study")
        }
      />

      <Field
        label="Date"
        type="text"
        value={date}
        isEditing={editingField === "date"}
        onChange={(e) => setDate(e.target.value)}
        onEditToggle={() =>
          setEditingField(editingField === "date" ? null : "date")
        }
      />
    </div>
  );
}

export default GeneralInfo;
