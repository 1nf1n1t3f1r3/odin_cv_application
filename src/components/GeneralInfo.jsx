//src/components/GeneralInfo.jsx

import { useState } from "react";
import Field from "./Field.jsx";

function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [editingField, setEditingField] = useState(null);

  return (
    <div>
      <h2>General Info</h2>

      <Field
        label="Name"
        type="text"
        value={name}
        isEditing={editingField === "name"}
        onChange={(e) => setName(e.target.value)}
        onEditToggle={() =>
          setEditingField(editingField === "name" ? null : "name")
        }
      />

      <Field
        label="Email"
        type="email"
        value={email}
        isEditing={editingField === "email"}
        onChange={(e) => setEmail(e.target.value)}
        onEditToggle={() =>
          setEditingField(editingField === "email" ? null : "email")
        }
      />

      <Field
        label="Phone"
        type="text"
        value={phone}
        isEditing={editingField === "phone"}
        onChange={(e) => setPhone(e.target.value)}
        onEditToggle={() =>
          setEditingField(editingField === "phone" ? null : "phone")
        }
      />
    </div>
  );
}

export default GeneralInfo;
