import "../styles/Field.css";

function Field({
  label,
  value,
  type = "text",
  isEditing,
  onChange,
  onEditToggle,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onEditToggle();
  };

  return (
    <div className="field">
      <label className="field-label">{label}:</label>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="field-controls">
          {type === "textarea" ? (
            <textarea value={value} onChange={onChange} />
          ) : (
            <input type={type} value={value} onChange={onChange} />
          )}

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="field-controls">
          <span>{value}</span>
          <button onClick={onEditToggle}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Field;
