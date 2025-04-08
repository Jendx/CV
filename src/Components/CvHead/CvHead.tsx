import { Box, Grid } from "@mui/material";
import React from "react";
import styles from './CvHead.module.css'

const CvHead = () => {
    return (
      <Grid container spacing={10}>
        <Grid>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/images/MyPhoto.jpg`}
            alt={"My photo"}
            sx={{
              width: 350,
              height: 350,
              maxWidth: { xs: 350, md: 250 },
              maxHeight: { xs: 350, md: 250 },
              borderRadius: 45
            }}
            />
        </Grid>
        <Grid>
          <h1>Bc. Jan Bartovič</h1>
          <h2 className={styles['CvHead_role-title']}>Student VŠB, Software Developer</h2>
        </Grid>
      </Grid>
        
    );
};

export default CvHead;