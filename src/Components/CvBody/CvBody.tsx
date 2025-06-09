import { Grid } from "@mui/material";
import React from "react";
import AboutMe from './AboutMe';
import WorkExperience from "./WorkExperience";

const CvBody = () => {
    
    return (
        <Grid>
            <AboutMe/>
            <WorkExperience/>
        </Grid>
    );
};

export default CvBody;