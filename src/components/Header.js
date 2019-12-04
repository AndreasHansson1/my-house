import React, { useContext } from "react";
import { withRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FirebaseContext } from "../firebase";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: teal;
  padding: 2rem;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyledLink = styled(NavLink)`
  margin: 0 0.5rem;
`;

const Divider = styled.div`
  margin: 0 0.5rem;
`;

const LogoutWrapper = styled.div`
  display: flex;
  white-space: nowrap;
`;

function Header() {
  const { user, firebase } = useContext(FirebaseContext);
  console.log(user);
  return (
    <StyledHeader>
      <Flex>
        <h1>Logo</h1>
        <StyledLink to="/">
          <strong>Todo News</strong>
        </StyledLink>
        <StyledLink to="/">New</StyledLink>
        <Divider>|</Divider>
        <StyledLink to="/top">top</StyledLink>
        <Divider>|</Divider>
        <StyledLink to="/search">search</StyledLink>
        {user && (
          <>
            <Divider>|</Divider>
            <StyledLink to="/create">submit</StyledLink>
          </>
        )}
      </Flex>
      <LogoutWrapper>
        {user ? (
          <>
            <h4>{user.displayName}</h4>
            <Divider> | </Divider>
            <div onClick={() => firebase.logout()}>logout</div>
          </>
        ) : (
          <StyledLink to="/login">login</StyledLink>
        )}
      </LogoutWrapper>
    </StyledHeader>
  );
}

export default withRouter(Header);
