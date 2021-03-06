import React, { FC, Suspense, useState, useEffect } from "react";
import { Grid, Box, Image, Text } from "grommet";
import BerrySidebarItems from "./BerrySidebarItems";
import { Berry, fetchBerry, fetchBerryList } from "./fetchBerryData";
import dabOnTheHaters from "../../dabbing.jpg";
import BerryDetails from "./BerryDetails";
import NoBerryFallback from "./NoBerryFallback";

const initialResource = fetchBerryList();

const BerryDex: FC = () => {
  const [resource, setResource] = useState(initialResource);
  const [berryId, setBerryId] = useState("");
  const [berry, setBerry] = useState((null as unknown) as Berry);

  useEffect(() => {
    if (berryId) {
      fetchBerry(berryId).then((b: Berry) => setBerry(b));
    }
  }, [berryId]);

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
          <BerrySidebarItems
            resource={resource}
            berryHandler={id => setBerryId(id)}
          />
        </Suspense>
      </Box>
      {berry ? <BerryDetails berry={berry} /> : <NoBerryFallback />}
    </Grid>
  );
};

export default BerryDex;
