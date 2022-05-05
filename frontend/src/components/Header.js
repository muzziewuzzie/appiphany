import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Button from "./Button";

const Header = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setInterval(() => {
      setUser(localStorage.getItem("user"));
    }, 5000);
  }, []);

  return (
    <header>
      <Link to="/" className="link">
        <h1 className="app_title">APPIPHANY</h1>
      </Link>
      <NavBar />
      {user ? (
        user
      ) : (
        <Link to="/login">
          <Button name="Login" />
        </Link>
      )}
    </header>
  );
};

export default Header;
