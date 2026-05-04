// src/components/Experience.jsx

import Field from "./Field.jsx";

function Experience({
  editingSection,
  setEditingSection,
  experience,
  setExperience,
}) {
  return (
    <div>
      <h2>Experience</h2>

      <Field
        label="Company"
        type="text"
        value={experience.company}
        isEditing={editingSection === "experience-company"}
        onChange={(e) =>
          setExperience({ ...experience, company: e.target.value })
        }
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
        value={experience.position}
        isEditing={editingSection === "experience-position"}
        onChange={(e) =>
          setExperience({ ...experience, position: e.target.value })
        }
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
        type="textarea"
        value={experience.responsibilities}
        isEditing={editingSection === "experience-responsibilities"}
        onChange={(e) =>
          setExperience({
            ...experience,
            responsibilities: e.target.value,
          })
        }
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
        type="date"
        value={experience.startDate}
        isEditing={editingSection === "experience-start"}
        onChange={(e) =>
          setExperience({ ...experience, startDate: e.target.value })
        }
        onEditToggle={() =>
          setEditingSection(
            editingSection === "experience-start" ? null : "experience-start",
          )
        }
      />

      <Field
        label="End Date"
        type="date"
        value={experience.endDate}
        isEditing={editingSection === "experience-end"}
        onChange={(e) =>
          setExperience({ ...experience, endDate: e.target.value })
        }
        onEditToggle={() =>
          setEditingSection(
            editingSection === "experience-end" ? null : "experience-end",
          )
        }
      />
    </div>
  );
}

export default Experience;
