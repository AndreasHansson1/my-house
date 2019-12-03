import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  outline: none;
  border: none;
  padding: 0.5rem 2rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-white);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  background-color: ${props =>
    props.disabled
      ? "var(--color-greyish-dark)"
      : "var(--color-primary-light)"};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #333;
  }
`;

const Button = ({ children, disabled, ...rest }) => {
  return (
    <StyledButton disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
