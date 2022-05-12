import { useContext } from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Button from "./Button";

import { UserContext } from "../App";

const Header = () => {
  const { state } = useContext(UserContext);

  return (
    <header>
      <Link to="/" className="link">
        <h1 className="app_title">APPIPHANY</h1>
      </Link>
      <NavBar />
      {state.loggedIn ? (
        state.username
      ) : (
        <Link to="/login">
          <Button name="Login" />
        </Link>
      )}
    </header>
  );
};

export default Header;
