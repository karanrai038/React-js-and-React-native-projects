import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FriendsContext } from "./FriendsContext";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You have {this.context.currentFriends.length} friends.</Text>

        {this.context.currentFriends.map((friend, index) => (
          <Button
            key={friend}
            title={`Remove ${friend}`}
            onPress={() => this.context.removeFriend(index)}
          />
        ))}

        <Button
          title="Add some friends"
          onPress={() => this.props.navigation.navigate("Friends")}
        />
      </View>
    );
  }
}
HomeScreen.contextType = FriendsContext;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
// ...

export default HomeScreen;
