import React, { FC } from "react";
import { Berry } from "./fetchBerryData";
import { Box, Heading } from "grommet";

type Props = {
  berry: Berry;
};

const BerryDetails: FC<Props> = ({ berry }) => {
  const { name } = berry;
  return (
    <Box gridArea="main" pad="medium">
      <Heading>{name.toLocaleUpperCase()}</Heading>
      <code>{JSON.stringify(berry)}</code>
    </Box>
  );
};

export default BerryDetails;
