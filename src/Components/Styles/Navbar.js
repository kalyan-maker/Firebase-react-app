import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  border-bottom: 1px solid #e5e5e5;
  z-index: 1;
  ul {
    width: 50%;
    height: 60px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul:first-child {
    margin-left: 30px;
  }
  ul li {
    font-weight: 600;
    list-style: none;
  }
  h1 {
    margin-top: 30px;
    text-transform: uppercase;
    font-size: 30px;
    padding: 1px;
    color: black;
    letter-spacing: 1px;
    cursor: pointer;
    opacity: 0.9;
  }
  .link {
    text-decoration: none;
  }
`;

export const Account = styled.div`
  margin-left: auto;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  .login {
    margin-top: 10px;
    font-size: 18px;
    justify-content: space-around;
  }
  ul {
    text-transform: capitalize;
  }
  li {
    margin: 10px;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 15px;
    color: black;
    cursor: pointer;
    opacity: 1;
  }
  .link {
    text-decoration: none;
  }
  .dropdown {
    position: relative;
    display: inline-block;
    margin-right: 10rem;
    .dropbtn {
      border: 0;
      background-color: #fff;
      font-size: 22px;
      letter-spacing: 1.2px;
      padding: 10px;
      text-transform: capitalize;
      img {
        height: 30px;
        width: 30px;
        font-size: 10px;
        text-transform: lowercase;
      }
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #00ff84;
      margin: 0;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      padding: 12px 16px;
      z-index: 1;
      li {
        margin-top: 0;
        list-style: none;
        font-size: 10px;
        text-transform: capitalize;
        color: #002333;
        &:hover {
          background: none;
        }
      }
    }
    &:hover .dropdown-content {
      display: block;
    }
  }
`;
