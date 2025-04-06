import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import SUPPORTED_LANGUAGES from "@Constants/supportedLanguages";

const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const onChangeLang = (event: SelectChangeEvent<string>) => {
    const languageCode = event.target.value;
    i18n.changeLanguage(languageCode);
  };

  return (
    <Select
      labelId="LanguageSwitcher_language-select"
      id="LanguageSwitcher_language-select"
      value={i18n.language}
      onChange={onChangeLang}
      autoWidth
    >
      {Object.values(SUPPORTED_LANGUAGES).map((language, i) => {
        return (
          <MenuItem
            key={`LanguageSwitcher_Menu-Item${i}-${language.code}`}
            value={language.code}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
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
              {language.label}
            </Box>
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default LanguageSelect;
