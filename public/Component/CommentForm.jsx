import React from "react";
export default class CommentForm extends React.Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Comment..."
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
