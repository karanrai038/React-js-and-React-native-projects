import React from "react";
import { UserConsumer } from "./userContext";

class ComponentC extends React.Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <h1>Hello {username}</h1>;
        }}
      </UserConsumer>
      // <h1>{val}</h1>
    );
  }
}
export default ComponentC;
