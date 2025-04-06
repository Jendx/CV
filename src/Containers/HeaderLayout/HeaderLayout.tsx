import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import TRANSLATION_KEYS from "@Constants/translationKeys";
import { LanguageSelect } from "Components";

const HeaderLayout = () => {
  const { t } = useTranslation();

  return (
    <Grid container direction="row" justifyContent="center" alignContent="center" spacing={12}>
      <Grid alignContent="center">{t(TRANSLATION_KEYS.HeaderLayout_Home)}</Grid>
      <Grid alignContent="center">{t(TRANSLATION_KEYS.HeaderLayout_Cv)}</Grid>
      <Grid alignContent="center">{t(TRANSLATION_KEYS.HeaderLayout_Referals)}</Grid>
      <Grid alignContent="center">
        <LanguageSelect/>
      </Grid>
    </Grid>
  );
};

export default HeaderLayout;
