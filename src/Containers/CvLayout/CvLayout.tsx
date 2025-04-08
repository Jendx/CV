import { Grid } from "@mui/material";
import { CvHead } from "Components";
import React from "react";

const CvLayout: React.FC = () => {

    return (
        <Grid container direction="column" justifyContent="flex-start">
            <Grid container>
                <CvHead/>
            </Grid>
        </Grid>
    );
};

export default CvLayout;