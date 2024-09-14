import React from "react";

function CardComment({ comment }) {
  return (
    <div className=" cards">
      <h2>{comment.name}</h2>
      <h4>{comment.email}</h4>
      <p>{comment.body}</p>
    </div>
  );
}

export default CardComment;
