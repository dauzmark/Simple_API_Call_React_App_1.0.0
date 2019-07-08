import React from "react";

export default function Comments(props) {
  return (
    <ul>
      {props.comments.map(comment => {
        return (
          <li key={1 + Math.random()}>
            {comment}{" "}
            <button onClick={props.delComment.bind(this, comment)}>X</button>
          </li>
        );
      })}
    </ul>
  );
}
