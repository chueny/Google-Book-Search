import React from "react";

const TrailContext = React.createContext({
  username: "",
  description: "",
  distance: "",
  date: new Date(),
  users: [],
});

export default TrailContext;


