//src/components/Experience.jsx

import { useState } from "react";
import Field from "./Field.jsx";

function Experience({ editingSection, setEditingSection }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div>
      <h2>General Info</h2>

      <Field
        label="Company"
        type="text"
        value={company}
        isEditing={editingSection === "experience-company"}
        onChange={(e) => setCompany(e.target.value)}
        onEditToggle={() =>
          setEditingSection(
            editingSection === "experience-company"
              ? null
              : "experience-company",
          )
        }
      />

      <Field
        label="Position"
        type="text"
        value={position}
        isEditing={editingSection === "experience-position"}
        onChange={(e) => setPosition(e.target.value)}
        onEditToggle={() =>
          setEditingSection(
            editingSection === "experience-position"
              ? null
              : "experience-position",
          )
        }
      />

      <Field
        label="Responsibilities"
        type="text"
        value={responsibilities}
        isEditing={editingSection === "experience-responsibilities"}
        onChange={(e) => setResponsibilities(e.target.value)}
        onEditToggle={() =>
          setEditingSection(
            editingSection === "experience-responsibilities"
              ? null
              : "experience-responsibilities",
          )
        }
      />

      <Field
        label="Start Date"
        type="text"
        value={startDate}
        isEditing={editingSection === "experience-startDate"}
        onChange={(e) => setStartDate(e.target.value)}
        onEditToggle={() =>
          setEditingSection(
            editingSection === "experience-startDate"
              ? null
              : "experience-startDate",
          )
        }
      />

      <Field
        label="End Date"
        type="text"
        value={endDate}
        isEditing={editingSection === "experience-endDate"}
        onChange={(e) => setEndDate(e.target.value)}
        onEditToggle={() =>
          setEditingSection(
            editingSection === "experience-endDate"
              ? null
              : "experience-endDate",
          )
        }
      />
    </div>
  );
}

export default Experience;
