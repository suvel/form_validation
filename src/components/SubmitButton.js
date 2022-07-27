const SubmitButton = ({ onSubmit }) => {
  return (
    <button type="submit" class="btn btn-primary" onClick={onSubmit}>
      Submit
    </button>
  );
};

export default SubmitButton;
