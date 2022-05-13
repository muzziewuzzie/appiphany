import { useState, useEffect, useContext } from "react";

import { UserContext } from "../App";

import Button from "./Button";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const { state } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:5000/api/comments")
      .then((response) => response.json())
      .then((data) => setComments(data.datum));
    // eslint-disable-next-line
  }, []);

  const commentsPageStyle = {
    backgroundColor: "#3186e0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!state.loggedIn) {
      return;
    }

    const username = state.username;
    const email = state.email;

    const response = await fetch("http://localhost:5000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        comment,
      }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      setComments(data.datum);
      setComment("");
    }
  };

  return (
    <div className="content_container" style={commentsPageStyle}>
      <div className="comments_content">
        <h2>Comments</h2>
        <p>Share your thoughts! Leave a comment</p>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            className="comment_txt"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <Button name="Submit" />
        </form>
        <div className="comments">
          {comments.length !== 0
            ? comments.map((comment, index) => (
                <div key={index} className="comment">
                  <h3>{comment.username}</h3>
                  <p style={{ fontSize: "18px" }}>{comment.comment}</p>
                </div>
              ))
            : "No Comments"}
        </div>
      </div>
    </div>
  );
};

export default Comments;
