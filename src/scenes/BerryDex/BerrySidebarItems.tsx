import React, { FC, Suspense } from "react";
import { Box, Button, Text } from "grommet";
import { BerryResult } from "./fetchBerryData";

type Props = {
  resource: any;
};

const BerrySidebarItems: FC<Props> = ({ resource }) => {
  const results = resource.read();
  return results.map(({ name, url }: BerryResult) => (
    <Button key={name} href="#" hoverIndicator>
      <Box pad={{ horizontal: "large", vertical: "small" }}>
        <Text>{name.toUpperCase()}</Text>
      </Box>
    </Button>
  ));
};

export default BerrySidebarItems;
