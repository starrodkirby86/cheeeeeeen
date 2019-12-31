import React, { FC, Suspense, useState } from "react";
import { Grid, Box, Image, Text } from "grommet";
import BerrySidebarItems from "./BerrySidebarItems";
import { fetchBerryList } from "./fetchBerryData";
import dabOnTheHaters from "../../dabbing.jpg";

const initialResource = fetchBerryList();

const BerryDex: FC = () => {
  const [resource, setResource] = useState(initialResource);
  return (
    <Grid
      fill
      rows={["auto", "flex"]}
      columns={["auto", "flex"]}
      areas={[
        { name: "sidebar", start: [0, 1], end: [0, 1] },
        { name: "main", start: [1, 1], end: [1, 1] }
      ]}
    >
      <Box
        gridArea="sidebar"
        background="dark-3"
        width="medium"
        overflow={{
          vertical: "visible",
          horizontal: "hidden"
        }}
        animation={[
          { type: "fadeIn", duration: 300 },
          { type: "slideRight", size: "xlarge", duration: 150 }
        ]}
      >
        <Suspense fallback={<Text>Loading...</Text>}>
          <BerrySidebarItems resource={resource} />
        </Suspense>
      </Box>
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
    </Grid>
  );
};

export default BerryDex;
