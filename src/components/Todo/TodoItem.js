import React, { useContext } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FirebaseContext from "../../firebase/context";

const TodoWrapper = styled.div`
  padding: 1rem;
  margin: 1rem auto;
  width: 80%;
  background-color: var(--color-greyish-light);
`;

const Delete = styled.p`
  color: var(--color-error-color);
`;

function TodoItem({ todo }) {
  const date = formatDistanceToNow(todo.createdAt);

  const { firebase, user } = useContext(FirebaseContext);

  function deleteTodo() {
    firebase.db
      .collection("todos")
      .doc(todo.id)
      .delete()
      .then(() => {
        console.log(`Document with ID ${todo.id} was deleted`);
      })
      .catch(err => {
        console.error("Error deleting document:", err);
      });
  }

  return (
    <TodoWrapper>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <small>Added {date} ago.</small>
      <Link to={`/todo/${todo.id}`}>Detail</Link>
      <Delete onClick={deleteTodo}>Delete</Delete>
    </TodoWrapper>
  );
}

export default TodoItem;
