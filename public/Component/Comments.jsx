import React from "react";

export default class Comments extends React.Component {
  render() {
    return (
      <ul>
        {this.props.comments.map(comment => {
          return <li key={1 + Math.random()}>{comment}</li>;
        })}
      </ul>
    );
  }
}
