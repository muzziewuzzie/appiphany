import { useContext } from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Button from "./Button";

import { UserContext } from "../App";

const Header = () => {
  // const [user, setUser] = useState("");

  const { state } = useContext(UserContext);

  // useEffect(() => {
  //   setInterval(() => {
  //     setUser(localStorage.getItem("user"));
  //   }, 5000);
  // }, []);

  return (
    <header>
      <Link to="/" className="link">
        <h1 className="app_title">APPIPHANY</h1>
      </Link>
      <NavBar />
      {state || localStorage.getItem("user") ? (
        localStorage.getItem("user")
      ) : (
        <Link to="/login">
          <Button name="Login" />
        </Link>
      )}
    </header>
  );
};

export default Header;
