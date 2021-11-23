import React, { useState } from "react";
import { useAuth } from "../../Context/Auth";
import { Form, TextInput, Button, Container } from "../Styles/SignUp";
import { useNavigate, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Reset = () => {
  const navigate = useNavigate();

  const query = useQuery();

  const { resetPassword } = useAuth();

  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(query.get("oobCode"), password, confirmPassword);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to reset-password!");
    }
  }

  return (
    <Container>
      <div className="row">
        <div className="img-2"> </div>
        <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
          <h1>Reset new password</h1>
          <TextInput>
            <span className="bi bi-key" />
            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </TextInput>
          <TextInput>
            <span className="bi bi-key-fill" />
            <input
              type="password"
              placeholder="confirm  New password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </TextInput>
          <Button type="submit" disabled={loading}>
            <span>Submit Now</span>
          </Button>
          {error && <p className="error">{error}</p>}
        </Form>
      </div>
    </Container>
  );
};

export default Reset;
