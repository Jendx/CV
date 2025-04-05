import TRANSLATION_KEYS from "src/Constants/translationKeys";

export type Languages = Record<
  (typeof TRANSLATION_KEYS)[keyof typeof TRANSLATION_KEYS],
  string
>;