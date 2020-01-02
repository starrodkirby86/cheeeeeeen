import React, { FC } from "react";
import { Box, Image } from "grommet";
import dabOnTheHaters from "../../dabbing.jpg";

const NoBerryFallback: FC = () => {
  return (
    <Box
      gridArea="main"
      justify="center"
      align="center"
      overflow={{
        vertical: "visible",
        horizontal: "hidden"
      }}
    >
      <Box height="medium" width="medium">
        <Image fit="cover" alt="Dab!" src={dabOnTheHaters} />
      </Box>
    </Box>
  );
};

export default NoBerryFallback;
