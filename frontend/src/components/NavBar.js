import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const linkStyle = "link";
  const currentLinkStyle = "link current_link";

  return (
    <nav>
      <ul className="nav_links">
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? currentLinkStyle : linkStyle}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/topics"
            className={
              location.pathname.includes("/topics")
                ? currentLinkStyle
                : linkStyle
            }
          >
            Topics
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? currentLinkStyle : linkStyle
            }
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
