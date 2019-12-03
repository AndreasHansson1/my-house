import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 3rem;

  &:last-of-type {
    margin-bottom: 6rem;
  }
`;

const StyledInput = styled.input`
  padding: 1rem 2rem;
  background-color: var(--color-greyish-dark);
  color: var(--color-white);
  font-size: 1.4rem;
  font-weight: 500;
  border: ${props =>
    props.error ? "1px solid var(--color-error-color)" : "none"};
  border-radius: 5px;

  &::placeholder {
    color: var(--color-white);
  }
`;

const Input = ({ error, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput error={error} {...props} />
    </InputWrapper>
  );
};

export default Input;
