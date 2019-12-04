import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledButton from "../../styles/elements/Button";
import {
  FormWrapper,
  StyledForm,
  InputWrapper,
  StyledInput
} from "../../styles/elements";
import useFormValidation from "../Auth/useFormValidation";
import validateLogin from "../Auth/validateLogin";
import firebase from "../../firebase";

const P = styled.p`
  color: var(--color-error-color);
`;

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
};

function Login(props) {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
  const [login, setLogin] = useState(true);
  const [firebaseError, setFirebaseError] = useState(null);

  async function authenticateUser() {
    const { name, email, password } = values;
    try {
      login
        ? await firebase.login(email, password)
        : await firebase.register(name, email, password);
      props.history.push("/");
    } catch (err) {
      setFirebaseError(err.message);
    }
  }

  return (
    <FormWrapper>
      <h2>{login ? "Login" : "Create Account"}</h2>
      <StyledForm onSubmit={handleSubmit}>
        <InputWrapper>
          {!login && (
            <StyledInput
              onChange={handleChange}
              type="text"
              name="name"
              value={values.name}
              placeholder="Your name.."
            />
          )}
          <StyledInput
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.email}
            type="email"
            name="email"
            value={values.email}
            placeholder="Your email.."
          />
          {errors.email && <P>{errors.email}</P>}
          <StyledInput
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.password}
            type="password"
            name="password"
            value={values.password}
            placeholder="Choose password.."
          />
          {errors.password && <P>{errors.password}</P>}
          {firebaseError && <P>{firebaseError}</P>}
        </InputWrapper>
        <StyledButton disabled={isSubmitting} type="submit">
          Submit
        </StyledButton>
        <StyledButton
          type="button"
          onClick={() => setLogin(prevLogin => !prevLogin)}
        >
          {login ? "create an account?" : "already have an account?"}
        </StyledButton>
      </StyledForm>
      <div>
        <Link to="/forgot">Forgot password?</Link>
      </div>
    </FormWrapper>
  );
}

export default Login;
