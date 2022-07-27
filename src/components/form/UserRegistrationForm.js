import { useState } from "react";
import ignoreDefaultFormAction from "../../utility/ignoreDefaultFormAction";
import {
  NameField,
  EmailField,
  MobileField,
  CountryField,
  StateField,
  MessageField,
} from "../fields";
import SubmitButton from "../SubmitButton";
import FormFieldWrapper from "../FormFieldWrapper";
import FormInvalidFeedback from "../FormInvalidFeedback";
import fieldPattern from "../../utility/fieldPattern";

const initialFormData = {
  userName: "",
  userEmail: "",
  userMobileNumber: "",
  userCountry: "",
  userState: "",
  userMessage: "",
};

const initialFormValidation = {
  userName: { valid: true, msg: "" },
  userEmail: { valid: true, msg: "" },
  userMobileNumber: { valid: true, msg: "" },
  userCountry: { valid: true, msg: "" },
  userState: { valid: true, msg: "" },
  userMessage: { valid: true, msg: "" },
};

const validateFormFields = (formObject) => {
  const {
    userName,
    userEmail,
    userMobileNumber,
    userCountry,
    userState,
    userMessage,
  } = formObject;
  let submittedFormValidation = JSON.parse(
    JSON.stringify(initialFormValidation)
  );
  if (!fieldPattern.userName.test(userName)) {
    submittedFormValidation.userName.valid = false;
    submittedFormValidation.userName.msg =
      "Invalid name, expecting names like A.Abdul, A.P.J.Abdul Kalam";
  }
  if (!fieldPattern.userEmail.test(userEmail)) {
    submittedFormValidation.userEmail.valid = false;
    submittedFormValidation.userEmail.msg =
      "Invalid email, expecting names like person1.h@someemail.com, person33-234@fh.in";
  }
  if (!fieldPattern.userMobileNumber.test(userMobileNumber)) {
    submittedFormValidation.userMobileNumber.valid = false;
    submittedFormValidation.userMobileNumber.msg =
      "Invalid mobile number, expecting indian mobile number like 9988443322,+919988443322";
  }
  if (!fieldPattern.userCountry.test(userCountry)) {
    submittedFormValidation.userCountry.valid = false;
    submittedFormValidation.userCountry.msg =
      "Invalid country, country can not contain numbers";
  }
  if (!fieldPattern.userState.test(userState)) {
    submittedFormValidation.userState.valid = false;
    submittedFormValidation.userState.msg =
      "Invalid state, state can not contain numbers";
  }
  return submittedFormValidation;
};

const UserRegistrationForm = ({ handelOnValidSubmission }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const [formValidation, setFormValidation] = useState(initialFormValidation);

  const onFormFieldUpdates = (fieldKey, fieldValue) => {
    setFormData((curFormData) => ({ ...curFormData, [fieldKey]: fieldValue }));
  };

  const handelFormSubmit = () => {
    const submittedFormValidation = validateFormFields(formData);
    const formHasInvalidFields = Object.values(submittedFormValidation).some(
      (fieldValidation) => fieldValidation.valid === false
    );

    if (formHasInvalidFields) {
      setFormValidation(submittedFormValidation);
      setIsFormInvalid(true);
      return;
    }

    handelOnValidSubmission();
  };

  return (
    <form className="" onSubmit={ignoreDefaultFormAction}>
      <FormInvalidFeedback
        show={isFormInvalid}
        msg={
          "one or more fields in the forms are invalid, lease do modify them and click submit to proceed"
        }
      />
      <fieldset>
        <FormFieldWrapper>
          <NameField
            value={formData.userName}
            onValueChange={(value) => onFormFieldUpdates("userName", value)}
            validation={formValidation.userName}
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <EmailField
            value={formData.userEmail}
            onValueChange={(value) => onFormFieldUpdates("userEmail", value)}
            validation={formValidation.userEmail}
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <MobileField
            value={formData.userMobileNumber}
            onValueChange={(value) =>
              onFormFieldUpdates("userMobileNumber", value)
            }
            validation={formValidation.userMobileNumber}
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <CountryField
            value={formData.userCountry}
            onValueChange={(value) => onFormFieldUpdates("userCountry", value)}
            validation={formValidation.userCountry}
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <StateField
            value={formData.userState}
            onValueChange={(value) => onFormFieldUpdates("userState", value)}
            validation={formValidation.userState}
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <MessageField
            value={formData.userMessage}
            onValueChange={(value) => onFormFieldUpdates("userMessage", value)}
            validation={formValidation.userMessage}
          />
        </FormFieldWrapper>
        <div class="d-flex justify-content-center">
          <SubmitButton onSubmit={handelFormSubmit} />
        </div>
      </fieldset>
    </form>
  );
};

export default UserRegistrationForm;
