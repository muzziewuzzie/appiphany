import { Link } from "react-router-dom";

import Button from "./Button";

const Login = () => {
  const loginPageStyle = {
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="content_container" style={loginPageStyle}>
      <div className="login_content">
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" autoComplete="off" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
          <Button name="Sign In" />
        </form>
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
