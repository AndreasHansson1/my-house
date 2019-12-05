import React, { useContext, useEffect } from "react";
import FirebaseContext from "../../firebase/context";

function TodoList(props) {
  const { firebase, user } = useContext(FirebaseContext);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    await firebase.db
      .collection("todos")
      // .where("uid", "=", user.uid)
      .onSnapshot(handleSnapshot);
  }

  function handleSnapshot(snapshot) {
    const todos = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    console.log({ todos });
  }

  return <div>TodoList</div>;
}

export default TodoList;
