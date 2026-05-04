import Field from "./Field.jsx";

function GeneralInfo({
  general,
  setGeneral,
  editingSection,
  setEditingSection,
}) {
  const handleChange = (field) => (e) => {
    setGeneral({
      ...general,
      [field]: e.target.value,
    });
  };

  const toggleEdit = (field) => {
    setEditingSection((prev) =>
      prev === `general-${field}` ? null : `general-${field}`,
    );
  };

  return (
    <div>
      <h2>General Info</h2>

      <Field
        label="Name"
        type="text"
        value={general.name}
        isEditing={editingSection === "general-name"}
        onChange={handleChange("name")}
        onEditToggle={() => toggleEdit("name")}
      />

      <Field
        label="Email"
        type="email"
        value={general.email}
        isEditing={editingSection === "general-email"}
        onChange={handleChange("email")}
        onEditToggle={() => toggleEdit("email")}
      />

      <Field
        label="Phone"
        type="text"
        value={general.phone}
        isEditing={editingSection === "general-phone"}
        onChange={handleChange("phone")}
        onEditToggle={() => toggleEdit("phone")}
      />
    </div>
  );
}

export default GeneralInfo;
