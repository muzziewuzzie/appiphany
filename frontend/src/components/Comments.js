import { useState, useEffect } from "react";

import Button from "./Button";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  //   const { state } = useContext(UserContext);

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch("http://localhost:5000/api/comments", {
        method: "GET",
      });
      const data = await response.json();
      setComments(data.datum);
      console.log(comments ? "true" : "false");
    };
    getComments();
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

    if (!localStorage.getItem("user")) {
      return;
    }

    const username = localStorage.getItem("user");
    const email = localStorage.getItem("email");

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
