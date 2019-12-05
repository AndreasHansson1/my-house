import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 10rem 5rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary-dark);
  color: var(--color-white);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
`;

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
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
    props.errors ? "var(--color-greyish-dark)" : "var(--color-primary-light)"};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 3rem;

  &:last-of-type {
    margin-bottom: 6rem;
  }
`;

export const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  background-color: var(--color-greyish-dark);
  color: var(--color-white);
  font-weight: 500;
  border: ${props => (props.error ? "1px solid red" : "none")};
  border-radius: 5px;

  &::placeholder {
    color: var(--color-white);
  }
`;

export const StyledTextarea = styled.textarea`
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  background-color: var(--color-greyish-dark);
  color: var(--color-white);
  /* font-size: 1.4rem; */
  font-weight: 500;
  border: ${props =>
    props.error ? "1px solid var(--color-error-color)" : "none"};
  border-radius: 5px;

  &::placeholder {
    color: var(--color-white);
  }
`;

export const StyledSelect = styled.select`
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  background-color: var(--color-greyish-dark);
  color: var(--color-white);
  /* font-size: 1.4rem; */
  font-weight: 500;
  border: ${props =>
    props.error ? "1px solid var(--color-error-color)" : "none"};
  border-radius: 5px;

  &::placeholder {
    color: var(--color-white);
  }
`;
