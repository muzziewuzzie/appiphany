import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const linkStyle = "link";
  const currentLinkStyle = "current_link";

  return (
    <nav>
      <ul className="nav_links">
        <li>
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? `${linkStyle} ${currentLinkStyle}`
                : linkStyle
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/topics"
            className={
              location.pathname === "/topics"
                ? `${linkStyle} ${currentLinkStyle}`
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
              location.pathname === "/about"
                ? `${linkStyle} ${currentLinkStyle}`
                : linkStyle
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
