import NavBar from "./NavBar";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <h1 className="app_title">APPIPHANY</h1>
      <NavBar />
      <Button name="Login" />
    </header>
  );
};

export default Header;
