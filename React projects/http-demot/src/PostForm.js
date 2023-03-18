import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", topic: "", body: "" };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.onFormSubmit}>
          <div>
            <input
              type="text"
              name="id"
              placeholder="enter id"
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <input
              type="text"
              name="topic"
              placeholder="enter topic"
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <input
              type="text"
              name="body"
              placeholder="enter body"
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
