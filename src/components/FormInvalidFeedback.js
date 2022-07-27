const FormInvalidFeedback = ({ show, msg }) => {
  const inputClass = `${show ? "is-invalid" : ""}`;
  return (
    <>
      <div style={{ display: "none" }} className={inputClass} />
      <div class="invalid-feedback text-center">{msg}</div>
    </>
  );
};

export default FormInvalidFeedback;
