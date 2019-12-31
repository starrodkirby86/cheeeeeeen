import React, { FC } from "react";
import { Box, Heading } from "grommet";

const Navbar: FC = () => {
  return (
    <Box
      tag="header"
      pad="small"
      elevation="small"
      justify="between"
      direction="row"
      align="center"
      flex={false}
    >
      <Heading level={3} margin="none">
        <strong>Chen&apos;s Berry Dex!</strong>
      </Heading>
    </Box>
  );
};

export default Navbar;
