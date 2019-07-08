import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
//
import Comments from "../public/Component/Comments";
import CommentForm from "../public/Component/CommentForm";

import "./styles.css";

class App extends React.Component {
  state = {
    comments: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      const comments = res.data.map(comment => {
        return comment.title;
      });
      this.setState({ comments });
    });
  }

  addComment = input => {
    const comments = [...this.state.comments];
    this.setState({ comments: [...comments, input] });
  };

  delComment = item => {
    const comments = [...this.state.comments];
    this.setState({ comments: comments.filter(comment => comment !== item) });
  };

  render() {
    return (
      <div>
        <Comments comments={this.state.comments} delComment={this.delComment} />
        <hr />
        <CommentForm addComment={this.addComment} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
