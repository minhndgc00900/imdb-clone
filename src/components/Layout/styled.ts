import { Link } from "react-router-dom";
import styled from "styled-components"


export const Header = styled.header`
  background-color: rgb(255, 255, 255);
  padding: 20px;
  display:flex;
  position: fixed;
  width: 100%;
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: rgba(121,121,121,255);
  border-bottom: solid 1px #e7e8ea;
  margin: auto;

  @media only screen and (min-width: 1366px) {
    padding: 20px 0;
}
`;

export const HeaderContent = styled.div`
  display:flex;
  margin: auto;
  width: 100%;
  flex-wrap: wrap;

  @media only screen and (min-width: 1366px) {
    width: 80rem;
}
`;

export const Logo = styled.a`
  padding: 10px 0;
  width: 30%;

  @media only screen and (min-width: 1366px) {
    width: 10%;
}
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 70%;

  @media only screen and (min-width: 1366px) {
    width: 90%;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: auto;
  width: 30rem;
`;

export const NavItem = styled.li`
  display: inline-block;
`;

export const NavLink = styled(Link)`
  display: block;
  padding: 10px;
  color: rgba(121,121,121,255);

  text-decoration: none;

  &:hover {
    color: #fff;
    background-color: #555;
  }
`;

export const Content = styled.div`
  padding: 1rem;
  padding-top: 7rem;
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  font-family: "Roboto", sans-serif !important;
  margin: auto;

  @media only screen and (min-width: 1366px) {
    width: 80rem;
}
`