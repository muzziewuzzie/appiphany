import { Link } from "react-router-dom";

import Button from "./Button";

const homepageContentStyle = {
  backgroundImage: `url("/img/black_white_hand.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const contentSpacing = {
  margin: "10px",
  color: "#fff",
};

const HomepageContent = () => {
  return (
    <div className="content_container" style={homepageContentStyle}>
      <div className="homepage_content">
        <h1 style={contentSpacing}>RACISM.</h1>
        <p style={contentSpacing}>
          Let's not remain ignorant any longer. <br /> Break the stigma now.
        </p>
        <Link to="/topics/racism">
          <Button name="Learn More" />
        </Link>
      </div>
    </div>
  );
};

export default HomepageContent;
