import React from "react";

//Create the context
const UserContext = React.createContext("Karan");

//providing the context
const UserProvider = UserContext.Provider;

//Consume the context
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };
