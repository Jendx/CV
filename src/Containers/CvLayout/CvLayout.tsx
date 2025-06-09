import { Grid } from "@mui/material";
import { CvBody, CvHead } from "Components";
import React from "react";

const CvLayout: React.FC = () => {
    return (
        <Grid container direction="column" justifyContent="flex-start"rowGap={5}>
            <Grid container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <CvHead/>
            </Grid>
            <Grid container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <CvBody/>
            </Grid>
        </Grid>
    );
};

export default CvLayout;