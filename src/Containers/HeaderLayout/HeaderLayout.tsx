import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import TRANSLATION_KEYS from "@Constants/translationKeys";
import { LanguageSwitcher } from "Components";

const HeaderLayout = () => {
  const { t } = useTranslation();

  return (
    <Grid container direction="row" justifyContent="center" spacing={12}>
      <Grid>{t(TRANSLATION_KEYS.HeaderLayout_Home)}</Grid>
      <Grid>{t(TRANSLATION_KEYS.HeaderLayout_Cv)}</Grid>
      <Grid>{t(TRANSLATION_KEYS.HeaderLayout_Referals)}</Grid>
      <Grid>
        <LanguageSwitcher/>
      </Grid>
    </Grid>
  );
};

export default HeaderLayout;
