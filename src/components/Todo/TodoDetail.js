import React, { useEffect, useContext, useState } from "react";
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

function TodoDetail(props) {
  const { firebase, user } = useContext(FirebaseContext);
  const [todo, setTodo] = useState(null);
  const { handleSubmit, handleChange, values, errors } = useFormValidation(
    INITIAL_STATE,
    validateCreateTodo
  );
  const todoId = props.match.params.todoId;

  useEffect(() => {
    getTodo();
  }, []);

  function getTodo() {
    const todoRef = firebase.db.collection("todos").doc(todoId);
    todoRef.get().then(doc => {
      setTodo({ ...doc.data(), id: doc.id });
    });
  }

  return !todo ? (
    <div>Loading..</div>
  ) : (
    <FormWrapper>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <p>{todo.category}</p>
    </FormWrapper>
  );
}

export default TodoDetail;
