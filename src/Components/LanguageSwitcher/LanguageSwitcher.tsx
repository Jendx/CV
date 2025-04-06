import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import SUPPORTED_LANGUAGES from "@Constants/supportedLanguages";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const onChangeLang = (event: SelectChangeEvent<string>) => {
    const languageCode = event.target.value;
    i18n.changeLanguage(languageCode);
  };

  return (
    <Select
      labelId="demo-select-small-label"
      id="demo-select-small"
      value={i18n.language}
      onChange={onChangeLang}
    >
      {Object.values(SUPPORTED_LANGUAGES).map((language, i) => {
        return (
          <MenuItem key={`MenuItem${i}-${language.code}`} value={language.code}>
            <ListItemIcon>
              <Box
                component="img"
                src={`https://flagcdn.com/24x18/${language.iconCode}.png`}
                alt={language.label}
                sx={{
                  width: 24,
                  height: 18,
                  borderRadius: "2px",
                  objectFit: "cover",
                }}
              />
            </ListItemIcon>
            <ListItemText>{language.label}</ListItemText>
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default LanguageSwitcher;
