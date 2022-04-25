import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <Link to="/" className="link">
        <h1 className="app_title">APPIPHANY</h1>
      </Link>
      <NavBar />
      <Link to="/login">
        <Button name="Login" />
      </Link>
    </header>
  );
};

export default Header;
