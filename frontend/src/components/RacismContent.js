import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

import { information, images } from "./RacismInfo";

const RacismContent = () => {
  const racismPageStyle = {
    backgroundColor: "#3186e0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const [index, setIndex] = useState(0);

  const progressBarWidth = useRef(
    `${((index + 1) / information.length) * 100}%`
  );

  const [progressBarStyle, setProgressBarStyle] = useState({
    height: "6px",
    width: progressBarWidth.current,
    backgroundColor: "#fff",
  });

  const handleLeftButtonClick = () => {
    if (index === 0) return;
    setIndex((prevIndex) => prevIndex - 1);
  };

  const handleRightButtonClick = () => {
    if (index === information.length - 1) return;
    setIndex((prevIndex) => prevIndex + 1);
  };

  // const handleCommentsButtonClick = () => {};

  useEffect(() => {
    progressBarWidth.current = `${((index + 1) / information.length) * 100}%`;
    setProgressBarStyle((prevStyle) => ({
      ...prevStyle,
      width: progressBarWidth.current,
    }));
  }, [index]);

  return (
    <div className="content_container" style={racismPageStyle}>
      <div className="racism_content">
        <div style={progressBarStyle}></div>
        <div className="content_no_bar">
          <div className="image_container">
            <img src={images[index]} alt="dummy" />
          </div>
          {information[index]}
        </div>
        <div className="button_container">
          <Button name="Previous" handleClick={handleLeftButtonClick} />
          <Button name="Next" handleClick={handleRightButtonClick} />
          {index === information.length - 1 ? (
            <Link to="/topics/racism/comments">
              <Button name="Comments" />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default RacismContent;
