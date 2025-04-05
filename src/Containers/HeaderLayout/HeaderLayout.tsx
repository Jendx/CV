import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import TRANSLATION_KEYS from "@Constants/translationKeys";

const HeaderLayout = () => {
  const { i18n, t } = useTranslation();

  return (
    <Grid container direction="row" justifyContent="center" spacing={12}>
      <Grid size="grow">{t(TRANSLATION_KEYS.HeaderLayout_Home)}</Grid>
      <Grid size="grow">{t(TRANSLATION_KEYS.HeaderLayout_Cv)}</Grid>
      <Grid size="grow">{t(TRANSLATION_KEYS.HeaderLayout_Referals)}</Grid>
      <Grid size="grow">Referals</Grid>
    </Grid>
  );
};

export default HeaderLayout;
