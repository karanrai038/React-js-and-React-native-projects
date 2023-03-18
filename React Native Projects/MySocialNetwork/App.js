import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import FriendsScreen from "./FriendsScreen";
import { FriendsContext } from "./FriendsContext";

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleFriends: ["Karan", "Kunal", "Akash"],
      currentFriends: [],
    };
  }

  addFriend = (index) => {
    const { currentFriends, possibleFriends } = this.state;

    // Pull friend out of possibleFriends
    const addedFriend = possibleFriends.splice(index, 1);
    // And put friend in currentFriends
    currentFriends.push(addedFriend);

    // Finally, update the app state
    this.setState({
      currentFriends,
      possibleFriends,
    });
  };

  removeFriend = (index) => {
    const { currentFriends, possibleFriends } = this.state;

    const removedFriend = currentFriends.splice(index, 1);

    possibleFriends.push(removedFriend);

    this.setState({ currentFriends, possibleFriends });
  };
  render() {
    return (
      <FriendsContext.Provider
        value={{
          currentFriends: this.state.currentFriends,
          possibleFriends: this.state.possibleFriends,
          addFriend: this.addFriend,
          removeFriend: this.removeFriend,
        }}
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Friends" component={FriendsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FriendsContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
