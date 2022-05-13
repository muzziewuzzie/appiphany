import { Link } from "react-router-dom";
import Button from "./Button";

const Topics = () => {
  const topicsPageStyle = {
    backgroundColor: "#3186e0",
    display: "flex",
    flexDirection: "column",
    padding: "30px",
  };
  const buttonAreaStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "end",
  };
  return (
    <div className="content_container" style={topicsPageStyle}>
      <div className="topics_content">
        <div className="image_container">
          <img src="img/black_white_hand_256.jpg" alt="dummy" />
        </div>
        <h2>Learn About Racism</h2>
        <p>
          Brief History on Racism, Presence in Today's Context, Difficulties in
          Interacting
        </p>
        <div style={buttonAreaStyle}>
          <Link to="/topics/racism" className="link">
            <Button name="Learn Now" />
          </Link>
        </div>
      </div>
      more topics coming soon...
    </div>
  );
};

export default Topics;
