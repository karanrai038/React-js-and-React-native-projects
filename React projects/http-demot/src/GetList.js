import React from "react";
import axios from "axios";
class GetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      this.setState({ posts: response.data }).catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "error occuring.." });
      });
    });
  }
  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        List of Posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.body}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}
export default GetList;
