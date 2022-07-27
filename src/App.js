import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FormHeader from "./components/FormHeader";
import UserRegistrationForm from "./components/form/UserRegistrationForm";
import UserSuccessfullyRegisteredValidation from "./components/UserSuccessfullyRegisteredValidation";
function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handelOnSubmitting = () => {
    setIsFormSubmitted(true);
  };

  return (
    <div className="App">
      <div class="container">
        <FormHeader darkText={"User Registration"} grayText={"Form"} />
        {isFormSubmitted ? (
          <UserSuccessfullyRegisteredValidation />
        ) : (
          <UserRegistrationForm handelOnValidSubmission={handelOnSubmitting} />
        )}
      </div>
    </div>
  );
}

export default App;
