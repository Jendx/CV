import { Avatar, Grid } from "@mui/material";
import React from "react";
import styles from 'global.module.css'

const CvHead = () => {
    return (
        <Grid
            container
            spacing={10}>
            <Grid>
                <Avatar
                    src={`${process.env.PUBLIC_URL}/images/MyPhoto.jpg`}
                    alt="My photo"
                    sx={{
                        width: 250,
                        height: 250,
                        maxWidth: { xs: 250, md: 150 },
                        maxHeight: { xs: 250, md: 150 },
                        borderRadius: 45
                    }} />
            </Grid>
            <Grid>
                <h1>Bc. Jan Bartovič</h1>
                <h2 className={`${styles['text-underline']} ${styles['text-center']}`}>Software Developer</h2>
            </Grid>
        </Grid>

    );
};

export default CvHead;