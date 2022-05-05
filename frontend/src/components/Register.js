import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [error, setError] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    if (matchPassword !== password) setError(true);
    else setError(false);
  }, [password, matchPassword]);

  const registerPageStyle = {
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (error) return;

    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      setRegistrationSuccess(true);
    }
  };

  return (
    <div className="content_container" style={registerPageStyle}>
      <div className="login_content">
        {registrationSuccess ? (
          <>
            <h2 style={{ textAlign: "center" }}>Account has been created!</h2>
            <Link to="/login">
              <Button name="Login" />
            </Link>
          </>
        ) : (
          <>
            <h2 style={{ textAlign: "center" }}>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                autoComplete="off"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="confirm_password">Confirm Password:</label>
              <input
                type="password"
                id="confirm_password"
                value={matchPassword}
                required
                onChange={(e) => setMatchPassword(e.target.value)}
              />
              <Button name="Sign Up" />
            </form>
            <p>
              Already registered? <br />
              <Link to="/login">
                <Button name="Login" />
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
