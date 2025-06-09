import TRANSLATION_KEYS from "@Constants/translationKeys";
import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import styles from 'global.module.css';

const AboutMe = () => {
    const { t } = useTranslation();
    return (
        <Fragment>
            <h3 className={styles['text-underline']}>{t(TRANSLATION_KEYS.AboutMe_SectionTitle)}</h3>
            <Grid>
                <p>{(t(TRANSLATION_KEYS.AboutMe_SectionText))}</p>
            </Grid>
            <hr/>
        </Fragment>
    );
};

export default AboutMe;