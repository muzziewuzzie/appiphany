import { useState, useEffect, useRef } from "react";

import Button from "./Button";

const RacismContent = () => {
  const information = [
    'When discussing slavery, Greek philosopher, Aristotle, stated that Greeks are free by nature, and non-Greeks are slaves by nature. Non-Greeks were also referred to as "barbarians" who have strong bodies but not intelligent, thus making them unfit for leadership positions.',
    '"Proto-racism" is defined as actions that display prejudice and stereotypes to a certain group at a time which predates the modern biologically-based concept of race. Aristotle\'s discussion of slavery is an example of proto-racism, and according to Benjamin Issac, professor of Ancient History Emeritus at Tel Aviv University, claims it is an important precursor to mordern racism.',
    "Dummy stuff",
  ];

  const racismPageStyle = {
    backgroundColor: "blue",
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
    setIndex(index - 1);
  };

  const handleRightButtonClick = () => {
    if (index === information.length - 1) return;
    setIndex(index + 1);
  };

  useEffect(() => {
    progressBarWidth.current = `${((index + 1) / information.length) * 100}%`;
    setProgressBarStyle((prevStyle) => ({
      ...prevStyle,
      width: progressBarWidth.current,
    }));
  }, [index, information.length]);

  return (
    <div className="content_container" style={racismPageStyle}>
      <div className="racism_content">
        <div style={progressBarStyle}></div>
        <div className="content_no_bar">
          <div className="image_container">
            <img src="/img/dummy.jpg" alt="dummy" />
          </div>
          <div className="racism_information">
            <p className="information">{information[index]}</p>
          </div>
        </div>
        <div className="button_container">
          <Button name="Left" handleClick={handleLeftButtonClick} />
          <Button name="Right" handleClick={handleRightButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default RacismContent;
