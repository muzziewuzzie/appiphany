import { useState } from "react";

import Button from "./Button";

const About = () => {
  const aboutPageStyle = {
    backgroundColor: "#3186e0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  };

  const [suggestion, setSuggestion] = useState("");
  const [displayForm, setDisplayForm] = useState(false);
  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);

  const handleSuggestionClick = async () => {
    setDisplayForm(true);

    const response = await fetch("http://localhost:5000/api/suggestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ suggestion }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      setSuggestionSubmitted(true);
    }
  };

  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="content_container" style={aboutPageStyle}>
      <div className="login_content">
        <h2 style={{ textAlign: "center" }}>About Appiphany</h2>
        <p>
          Appiphany is an informative web application that aims to provide
          information on "hard-to-talk-about" topics such as racism, misogyny,
          suicide, etc. Appiphany strives provide information that is unbiased,
          and in manageable chunks, making the process of acquiring knowledge
          easy and intuitive. Have a suggestion on what topic should be added on
          Appiphany? Click the button below!
        </p>
        <Button
          name="Submit A Suggestion"
          handleClick={handleSuggestionClick}
          customStyle={displayForm ? "no_display" : "btn"}
        />
        <form
          onSubmit={handleSuggestionSubmit}
          className={displayForm && !suggestionSubmitted ? "" : "no_display"}
        >
          <textarea
            className="comment_txt"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            required
          />
          <Button name="Submit" />
        </form>
        <p
          className={
            suggestionSubmitted ? "suggestion_submitted_message" : "no_display"
          }
        >
          Suggestion has been submitted!
        </p>
      </div>
    </div>
  );
};

export default About;
