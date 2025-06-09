import TRANSLATION_KEYS from "@Constants/translationKeys";
import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import styles from 'global.module.css';

const WorkExperience = () => {
    const { t } = useTranslation();
    return (
        <Fragment>
            <h3 className={styles['text-underline']}>{t(TRANSLATION_KEYS.WorkExperience_SectionTitle)}</h3>
            <Grid>
                <p>Add some cool component with all the work experiences</p>
            </Grid>
            <hr/>
        </Fragment>
    );
};

export default WorkExperience;