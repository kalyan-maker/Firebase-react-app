import styled from "styled-components";
import img from "../../Assests/Images/signup.svg";
import img1 from "../../Assests/Images/login.svg";
import img2 from "../../Assests/Images/success.png";

export const Container = styled.div`
  display: flex;
  .row {
    width: 100%;
  }
  .img {
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 50%;
    margin-top: 50px;
    float: left;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
  }
  .img-1 {
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 50%;
    margin-top: 50px;
    float: left;
    background-image: url(${img1});
    background-position: center;
    background-repeat: no-repeat;
  }
  .img-2 {
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 50%;
    margin-top: 50px;
    float: left;
    background-image: url(${img2});
    background-position: center;
    background-repeat: no-repeat;
  }
`;
export const Form = styled.form`
  margin-top: 0;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 50%;
  float: right;
  border: 5px soild black;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 0;
  .button {
    height: 44px;
    margin-top: 2rem;
  }
  .info {
    margin: 10px;
  }
`;

export const TextInput = styled.div`
  height: 50px;
  margin: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  padding: 2px;
  input {
    border: none;
    outline: none;
    height: 100%;
    width: 100%;
    padding: 0.3rem 0.7rem;
    background-color: #fff;
    font-size: 16px;
    font-weight: 500;
  }
  span {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  margin-top: 1rem;
  margin: 10px;
  span {
    margin-left: 2px;
  }
`;

export const Button = styled.button`
  margin: 10px;
  background: #00ff84;
  color: #002333;
  padding: 0.6rem 1.2rem;
  width: auto;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  &:hover {
    background: #002333;
    color: #fff;
  }
  &:hover span {
    color: #fff;
  }
`;
