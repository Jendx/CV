interface SupportedLanguage {
  label: string;
  code: string;
  iconCode: string;
}

export const SUPPORTED_LANGUAGES: Record<string, SupportedLanguage> = {
  en: {
    label: "English",
    code: "en",
    iconCode: "gb" 
  },
  cz: {
    label: "Česky",
    code: "cz",
    iconCode: "cz" 
  },
};

export default SUPPORTED_LANGUAGES;
