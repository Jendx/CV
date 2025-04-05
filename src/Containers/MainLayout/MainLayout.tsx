import { Grid } from "@mui/material";
import React from "react";
import HeaderLayout from "@Containers/HeaderLayout";

const MainLayout = () => {
  return (<Grid
    container
    direction="column"
    justifyContent="flex-start"
    >
      <Grid>
        <HeaderLayout/>
      </Grid>
      <Grid>
        LOL 2
      </Grid>
      <Grid>
        LOL 3
      </Grid>
  </Grid>);
};

export default MainLayout;
