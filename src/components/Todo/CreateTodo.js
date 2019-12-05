import React, { useContext } from "react";
import styled from "styled-components";

import StyledButton from "../../styles/elements/Button";
import {
  FormWrapper,
  StyledForm,
  InputWrapper,
  StyledInput,
  StyledTextarea,
  StyledSelect
} from "../../styles/elements";
import useFormValidation from "../Auth/useFormValidation";
import validateCreateTodo from "../Auth/validateCreateTodo";
import FirebaseContext from "../../firebase/context";

const P = styled.p`
  color: var(--color-error-color);
`;

const INITIAL_STATE = {
  title: "",
  description: "",
  category: ""
};

function CreateTodo(props) {
  const { firebase, user } = useContext(FirebaseContext);
  const { handleSubmit, handleChange, values, errors } = useFormValidation(
    INITIAL_STATE,
    validateCreateTodo,
    handleCreateTodo
  );

  function handleCreateTodo() {
    if (!user) {
      props.history.push("/login");
    } else {
      const { title, description, category } = values;
      const newTodo = {
        title,
        description,
        category,
        postedBy: {
          id: user.uid,
          name: user.displayName
        },
        created: Date.now()
      };
      firebase.db.collection("todos").add(newTodo);
      props.history.push("/");
    }
  }

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <InputWrapper>
          <StyledInput
            onChange={handleChange}
            value={values.title}
            error={errors.title}
            name="title"
            type="text"
            placeholder="Title"
          />
          {errors.title && <P>{errors.title}</P>}
          <StyledTextarea
            onChange={handleChange}
            value={values.description}
            error={errors.description}
            name="description"
            type="text"
            placeholder="Description"
          />
          {errors.description && <P>{errors.description}</P>}
          <StyledSelect
            onChange={handleChange}
            value={values.category}
            error={errors.category}
            name="category"
            size="5"
          >
            <option value="indoor">Indoor</option>
            <option value="house">Outdoor House</option>
            <option value="garden">Outdoor Garden</option>
            <option value="buy">Need to buy</option>
            <option value="contact">Need to contact</option>
          </StyledSelect>
          {errors.category && <P>{errors.category}</P>}
        </InputWrapper>
        <StyledButton type="submit">Add todo</StyledButton>
      </StyledForm>
    </FormWrapper>
  );
}

export default CreateTodo;
