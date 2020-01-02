import React, { FC } from "react";
import { Box, Button, Text } from "grommet";
import { BerryResult } from "./fetchBerryData";

type Props = {
  resource: any;
  berryHandler: (id: string) => void;
};

const BerrySidebarItems: FC<Props> = ({ resource, berryHandler }) => {
  const results = resource.read();
  return results.map(({ name }: BerryResult) => (
    <Button key={name} hoverIndicator onClick={() => berryHandler(name)}>
      <Box pad={{ horizontal: "large", vertical: "small" }}>
        <Text>{name.toUpperCase()}</Text>
      </Box>
    </Button>
  ));
};

export default BerrySidebarItems;
