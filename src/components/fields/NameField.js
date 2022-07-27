const NameField = ({ value, onValueChange, validation }) => {
  const defaultUserNameDetail = {
    labelValue: "Name",
    feedback: validation.msg || "Please enter a valid name.",
  };
  const inputClass = `form-control ${validation.valid ? "" : "is-invalid"}`;
  return (
    <>
      <label for="userName" class="form-label">
        {defaultUserNameDetail.labelValue}
      </label>
      <input
        class={inputClass}
        id="userName"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
      <div class="invalid-feedback">{defaultUserNameDetail.feedback}</div>
    </>
  );
};

export default NameField;
