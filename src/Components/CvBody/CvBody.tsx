import TRANSLATION_KEYS from "@Constants/translationKeys";
import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from 'react-i18next';

const CvBody = () => {
    const { t } = useTranslation();
    return (
        <Grid>
            <h3>{t(TRANSLATION_KEYS.CvBody_AboutMeTitle)}</h3>
            <p>{(t(TRANSLATION_KEYS.CvBody_AboutMeText))}</p>
        </Grid>
    );
};

export default CvBody;