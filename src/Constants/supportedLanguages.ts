interface SupportedLanguage {
  label: string;
  code: string;
}

export const SUPPORTED_LANGUAGES: Record<string, SupportedLanguage> = {
  en: {
    label: "English",
    code: "en",
  },
  cz: {
    label: "Česky",
    code: "cz",
  },
};

export default SUPPORTED_LANGUAGES;
