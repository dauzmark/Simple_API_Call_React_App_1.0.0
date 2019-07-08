import React from "react";
import axios from "axios";

export default class Comments extends React.Component {
  state = {
    comments: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      const comments = res.data;
      this.setState({ comments });
    });
  }

  render() {
    const comments = this.state.comments;
    return (
      <ul>
        {comments.map(comment => {
          return <li key={1 + Math.random()}>{comment.title}</li>;
        })}
      </ul>
    );
  }
}
