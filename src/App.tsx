import React from "react";
import dabOnTheHaters from "./dabbing.jpg";

const centerStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%"
};

const App: React.FC = () => {
  return <img src={dabOnTheHaters} alt="CHEEEEEEEN" style={centerStyle} />;
};

export default App;
