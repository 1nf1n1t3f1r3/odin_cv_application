//src/components/GeneralInfo.jsx

import { useState } from "react";
import Field from "./Field.jsx";

function GeneralInfo({ editingSection, setEditingSection }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <h2>General Info</h2>

      <Field
        label="Name"
        type="text"
        value={name}
        isEditing={editingSection === "general-name"}
        onChange={(e) => setName(e.target.value)}
        onEditToggle={() =>
          setEditingSection(
            editingSection === "general-name" ? null : "general-name",
          )
        }
      />

      <Field
        label="Email"
        type="email"
        value={email}
        isEditing={editingSection === "general-email"}
        onChange={(e) => setEmail(e.target.value)}
        onEditToggle={() =>
          setEditingSection(
            editingSection === "general-email" ? null : "general-email",
          )
        }
      />

      <Field
        label="Phone"
        type="text"
        value={phone}
        isEditing={editingSection === "general-phone"}
        onChange={(e) => setPhone(e.target.value)}
        onEditToggle={() =>
          setEditingSection(
            editingSection === "general-phone" ? null : "general-phone",
          )
        }
      />
    </div>
  );
}

export default GeneralInfo;
