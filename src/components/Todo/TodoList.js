import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from "../../firebase/context";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { firebase, user } = useContext(FirebaseContext);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (user) {
      getTodos();
    }
    return () => {};
  }, [user]);

  async function getTodos() {
    await firebase.db
      .collection("todos")
      .where("uid", "==", user.uid)
      .onSnapshot(handleSnapshot);
  }

  function handleSnapshot(snapshot) {
    const todos = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    setTodos(todos);
  }

  if (todos.length > 0) {
    return (
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    );
  } else {
    return <div>{user ? <p>Please add a todo</p> : <p>Please sign in</p>}</div>;
  }
}

export default TodoList;
