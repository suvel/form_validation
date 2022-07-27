const MobileField = ({ value, onValueChange, validation }) => {
  const defaultUserMobileDetail = {
    labelValue: "Mobile",
    feedback: validation.msg || "Please enter a valid mobile number.",
  };

  const inputClass = `form-control ${validation.valid ? "" : "is-invalid"}`;

  return (
    <>
      <label for="userMobileNumber" class="form-label">
        {defaultUserMobileDetail.labelValue}
      </label>
      <input
        class={inputClass}
        id="userMobileNumber"
        type="tel"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
      <div class="invalid-feedback">{defaultUserMobileDetail.feedback}</div>
    </>
  );
};

export default MobileField;
