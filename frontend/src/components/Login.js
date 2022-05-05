import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "./Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const loginPageStyle = {
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      localStorage.setItem("user", data.username);
      navigate("/");
    } else setErrorMessage(data.error);
  };

  return (
    <div className="content_container" style={loginPageStyle}>
      <div className="login_content">
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button name="Sign In" />
        </form>
        <p className={errorMessage ? "error_message" : { display: "none" }}>
          {errorMessage}
        </p>
        <p>
          Need an Account? <br />
          <Link to="/register">
            <Button name="Sign Up" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
