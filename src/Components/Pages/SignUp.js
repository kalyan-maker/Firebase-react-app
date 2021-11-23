import React, { useState } from "react";
import { useAuth } from "../../Context/Auth";
import { Link, useNavigate } from "react-router-dom";
import { TextInput, Label, Button, Container, Form } from "../Styles/SignUp";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }
  return (
    <Container>
      <div className="row" style={{ textAlign: "center" }}>
        <h1>Create an account</h1>
        <div className="img"> </div>
        <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
          <TextInput>
            <span className="bi bi-person" />
            <input
              type="text"
              placeholder="Enter name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </TextInput>
          <TextInput>
            <span className="bi bi-envelope" />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </TextInput>
          <TextInput>
            <span className="bi bi-key" />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </TextInput>
          <TextInput>
            <span className="bi bi-key-fill" />
            <input
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </TextInput>
          <Label>
            <input
              type="checkbox"
              value={agree}
              onChange={(e) => setAgree(e.target.value)}
            />
            <span>I agree to the Terms &amp; Conditions</span>
          </Label>
          <Button type="submit" disabled={loading}>
            <span>Submit Now</span>
          </Button>
          {error && <p className="error">{error}</p>}
          <div className="info">
            Already have an account? <Link to="/signin">Login</Link> instead.
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default SignUp;
