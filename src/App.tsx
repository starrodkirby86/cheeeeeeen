import React, { FC } from "react";
import { Grommet, Box } from "grommet";
import Navbar from "./scenes/Navbar";
import BerryDex from "./scenes/BerryDex";

const centerStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%"
};

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    }
  }
};

const App: FC = () => {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Navbar />
        <Box flex>
          <BerryDex />
        </Box>
      </Box>
    </Grommet>
  );
};

export default App;
