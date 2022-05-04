import { Link } from "react-router-dom";

import Button from "./Button";

const Register = () => {
  const registerPageStyle = {
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="content_container" style={registerPageStyle}>
      <div className="login_content">
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" autoComplete="off" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
          <Button name="Sign Up" />
        </form>
        <p>
          Already registered? <br />
          <Link to="/register">
            <Button name="Sign In" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
