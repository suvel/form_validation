const EmailField = ({ value, onValueChange, validation }) => {
  const defaultEmailDetail = {
    labelValue: "Email",
    feedback: validation.msg || "Please enter a valid email id.",
  };
  const inputClass = `form-control ${validation.valid ? "" : "is-invalid"}`;
  return (
    <>
      <label for="userEmail" class="form-label">
        {defaultEmailDetail.labelValue}
      </label>
      <input
        class={inputClass}
        id="userEmail"
        type="email"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
      <div class="invalid-feedback">{defaultEmailDetail.feedback}</div>
    </>
  );
};

export default EmailField;
