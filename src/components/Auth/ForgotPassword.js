import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../firebase";
import styled from "styled-components";

import StyledButton from "../../styles/elements/Button";
import {
  FormWrapper,
  StyledForm,
  InputWrapper,
  StyledInput
} from "../../styles/elements";

const SuccessMessage = styled.p`
  color: var(--color-success-color);
`;

const ErrorMessage = styled.p`
  color: var(--color-error-color);
`;

function ForgotPassword() {
  const { firebase } = useContext(FirebaseContext);
  const [resetPasswordEmail, setResetEmailPassword] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [resetPasswordError, setResetPasswordError] = useState(null);

  async function handleResetPassword() {
    try {
      await firebase.resetPassword(resetPasswordEmail);
      setIsPasswordReset(true);
      setResetPasswordError(null);
    } catch (err) {
      console.error("Error sending email", err);
      setResetPasswordError(err.message);
      setIsPasswordReset(false);
    }
  }

  return (
    <FormWrapper>
      <StyledForm>
        <InputWrapper>
          <StyledInput
            type="email"
            placeholder="Provide your account email"
            onChange={event => setResetEmailPassword(event.target.value)}
          />
        </InputWrapper>
      </StyledForm>
      <StyledButton onClick={handleResetPassword}>Reset password</StyledButton>
      {isPasswordReset && <SuccessMessage>Check your email</SuccessMessage>}
      {resetPasswordError && <ErrorMessage>{resetPasswordError}</ErrorMessage>}
    </FormWrapper>
  );
}

export default ForgotPassword;
