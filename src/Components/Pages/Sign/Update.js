import React, { useState } from "react";
import { useAuth } from "../../../Context/Auth"; //import useAuth
import { Form, TextInput, Button, Container } from "../../Styles/Sign"; //import styles
import { useHistory } from "react-router-dom"; //usenavigate from react router

const Update = () => {
  //navigate
  const history = useHistory();

  //useAuth
  const { update } = useAuth();

  //use state
  const [password, setPassword] = useState("");

  //error
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  //submit
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await update(password);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to set new-password!");
    }
  }
  return (
    <Container>
      <div className="row">
        <div className="img-1"> </div>
        {/* ------------------form------------------ */}
        <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
          <h1>New Password</h1>
          {/* ------------------input------------------ */}
          <TextInput>
            <span className="bi bi-key" />
            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </TextInput>
          {/* ------------------button------------------ */}
          <Button type="submit" disabled={loading}>
            <span>Submit Now</span>
          </Button>
          {/* ------------------error------------------ */}
          {error && (
            <p className="error" style={{ color: "red" }}>
              {error}
            </p>
          )}
        </Form>
      </div>
    </Container>
  );
};

export default Update;
