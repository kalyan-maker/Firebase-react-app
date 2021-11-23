import React, { useState } from "react";
import { useAuth } from "../../Context/Auth";
import { Form, TextInput, Button, Container } from "../Styles/SignUp";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  //handle submit
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login!");
    }
  }
  return (
    <Container>
      <div className="row" style={{ textAlign: "center" }}>
        <h1>Login to your account</h1>
        <div className="img-1"> </div>
        <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
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
          <Button type="submit" disabled={loading}>
            <span>Submit Now</span>
          </Button>
          {error && <p className="error">{error}</p>}
          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
          <div className="info">
            <Link to="/forget-password">Forget Password</Link>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default SignIn;
