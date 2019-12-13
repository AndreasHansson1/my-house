import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import CreateTodo from "./Todo/CreateTodo";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import TodoList from "./Todo/TodoList";
import TodoDetail from "./Todo/TodoDetail";

import useAuth from "../components/Auth/useAuth";
import firebase, { FirebaseContext } from "../firebase";

const AppContainer = styled.div``;

const RouteContainer = styled.div``;

function App() {
  const user = useAuth();
  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <AppContainer>
          <Header />
        </AppContainer>
        <RouteContainer></RouteContainer>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="todos" />} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/login" component={Login} />
          <Route path="/forgot" component={ForgotPassword} />
          <Route path="/todos" component={TodoList} />
          <Route path="/todo/:todoId" component={TodoDetail} />
        </Switch>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
