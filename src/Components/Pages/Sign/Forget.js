import React, { useState } from "react";
import { useAuth } from "../../../Context/Auth";
import { Container, Form, TextInput } from "../../Styles/Sign";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

const Button = styled.button`
  margin: 0;
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

const Forget = () => {
  const history = useHistory();

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { forgotPassword } = useAuth();

  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await forgotPassword(email);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to reset-password!");
    }
  }
  return (
    <Container>
      <div className="row" style={{ textAlign: "center" }}>
        <h1>Forget Password</h1>
        <div className="img-2"> </div>
        <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
          <TextInput style={{ margin: "0" }}>
            <span className="bi bi-envelope" />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </TextInput>
          <Button type="submit" disabled={loading}>
            <span>Submit Now</span>
          </Button>
          {error && (
            <p className="error" style={{ color: "red" }}>
              {error}
            </p>
          )}
          <div className="info">
            Already have an account? <Link to="/signin">Signin</Link> instead.
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Forget;
