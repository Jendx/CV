import { Grid } from "@mui/material";
import React from "react";

const HeaderLayout = () => {
    return (<Grid
        container
        direction="row"
        justifyContent="center"
        spacing={12}
        >
          <Grid size="grow">
            LOL
          </Grid>
          <Grid size="grow">
            LOL 2
          </Grid>
          <Grid size="grow">
            LOL 3
          </Grid>
      </Grid>);
};

export default HeaderLayout;