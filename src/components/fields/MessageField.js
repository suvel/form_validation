const MessageField = ({ value, onValueChange, validation }) => {
  const defaultMessageDetail = {
    labelValue: "Message",
    feedback: validation.msg || "Please enter a valid message.",
  };
  const inputClass = `form-control ${validation.valid ? "" : "is-invalid"}`;
  return (
    <>
      <label for="userMessage" class="form-label">
        {defaultMessageDetail.labelValue}
      </label>
      <textarea
        class={inputClass}
        id="userMessage"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
      <div class="invalid-feedback">{defaultMessageDetail.feedback}</div>
    </>
  );
};

export default MessageField;
