const CountryField = ({ value, onValueChange, validation }) => {
  const defaultUserCountryDetail = {
    labelValue: "Country",
    feedback: validation.msg || "Please enter a valid country.",
  };
  const inputClass = `form-control ${validation.valid ? "" : "is-invalid"}`;
  return (
    <>
      <label for="userCountry" class="form-label">
        {defaultUserCountryDetail.labelValue}
      </label>
      <input
        class={inputClass}
        id="userCountry"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
      <div class="invalid-feedback">{defaultUserCountryDetail.feedback}</div>
    </>
  );
};

export default CountryField;
