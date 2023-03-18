import React from "react";
import HemisphereDisplay from "./HemisphereDisplay";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Hello</div>;
// };

//class based components

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { latitude: 0, longitude: 0, errorMessage: "" };

    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     this.setState({
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //     });
    //   },
    //   (error) => {
    //     this.setState({ errorMessage: error.message });
    //   }
    // );
  }

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  };

  render() {
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <>
          <h1>
            <HemisphereDisplay latitude={this.state.latitude} />
          </h1>
          <div>
            <h3>Latitude is {this.state.latitude}</h3>
            <h3>Longitude is {this.state.longitude}</h3>
          </div>
        </>
      );
    }
    if (this.state.errorMessage && !this.state.latitude) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default App;
