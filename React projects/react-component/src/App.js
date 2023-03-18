import React from "react";

import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

class App extends React.Component {
  render() {
    return (
      <div>
        <UserProvider value="Kunal">
          <ComponentC />
        </UserProvider>
        {/* <ComponentC /> */}
      </div>
    );
  }
}

export default App;
