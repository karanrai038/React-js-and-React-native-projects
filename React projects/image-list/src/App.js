import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./imageList";

class App extends React.Component {
  state = { image: [] };

  onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=34224149-cc5182f14c03b2525358c41dc&q=${entry}&image_type=photo`
    );
    console.log(this);
    this.setState({ image: response.data.hits });
  };
  render() {
    return (
      <>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />

        <ImageList image={this.state.image} />
      </>
    );
  }
}
export default App;
