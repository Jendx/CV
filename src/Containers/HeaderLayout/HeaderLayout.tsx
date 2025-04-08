import React from "react";
import { Button, ButtonGroup, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import TRANSLATION_KEYS from "@Constants/translationKeys";
import { LanguageSelect } from "Components";
import MAIN_LAYOUTS, { KeysOfMainLayout } from "@Constants/mainLayouts";

interface HeaderLayoutProps {
  onButtonClicked: (value: KeysOfMainLayout) => void;
};

const HeaderLayout = ({ onButtonClicked }: HeaderLayoutProps) => {
  const { t } = useTranslation();

  return (
      <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignContent="center"
      paddingLeft={5}
      paddingRight={5}
      paddingTop={1}
      paddingBottom={1}
      spacing={12}
    >
      <Grid container></Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignContent="center">
          <ButtonGroup sx={{gap: '30px'}}>
            <Button variant="text" onClick={() => onButtonClicked(MAIN_LAYOUTS.Home)}>{t(TRANSLATION_KEYS.HeaderLayout_Home)}</Button>
            <Button variant="text" onClick={() => onButtonClicked(MAIN_LAYOUTS.CV)}>{t(TRANSLATION_KEYS.HeaderLayout_Cv)}</Button>
            <Button variant="text" onClick={() => onButtonClicked(MAIN_LAYOUTS.Referals)}>{t(TRANSLATION_KEYS.HeaderLayout_Referals)}</Button>
          </ButtonGroup>
        
      </Grid>

      <Grid alignContent="center" justifySelf="flex-end">
        <LanguageSelect />
      </Grid>
    </Grid>
  );
};

export default HeaderLayout;
