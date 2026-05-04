// src/components/Education.jsx

import Field from "./Field.jsx";

function Education({
  editingSection,
  setEditingSection,
  education,
  setEducation,
}) {
  return (
    <div>
      <h2>Education</h2>

      <Field
        label="School"
        type="text"
        value={education.school}
        isEditing={editingSection === "education-school"}
        onChange={(e) => setEducation({ ...education, school: e.target.value })}
        onEditToggle={() =>
          setEditingSection(
            editingSection === "education-school" ? null : "education-school",
          )
        }
      />

      <Field
        label="Study"
        type="text"
        value={education.study}
        isEditing={editingSection === "education-study"}
        onChange={(e) => setEducation({ ...education, study: e.target.value })}
        onEditToggle={() =>
          setEditingSection(
            editingSection === "education-study" ? null : "education-study",
          )
        }
      />

      <Field
        label="Study End Date"
        type="date"
        value={education.date}
        isEditing={editingSection === "education-date"}
        onChange={(e) => setEducation({ ...education, date: e.target.value })}
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
