//src/components/Field.jsx

function Field({ label, value, type, isEditing, onChange, onEditToggle }) {
  return (
    <div>
      <label>{label}: </label>

      {isEditing ? (
        <>
          <input type={type} value={value} onChange={onChange} />

          <button onClick={onEditToggle}>Submit</button>
        </>
      ) : (
        <>
          <span>{value} </span>
          <button onClick={onEditToggle}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Field;
