const StateField = ({ value, onValueChange, validation }) => {
    const defaultStateDetail = {
      labelValue: "State",
      feedback: validation.msg || "Please enter a valid state.",
    };
    const inputClass = `form-control ${validation.valid ? "" : "is-invalid"}`;
    return (
      <>
        <label for="userState" class="form-label">
          {defaultStateDetail.labelValue}
        </label>
        <input
          class={inputClass}
          id="userState"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
        />
        <div class="invalid-feedback">{defaultStateDetail.feedback}</div>
      </>
    );
  };

export default StateField;