import { I18n } from "i18n-js";
import { en } from "../languages/en";
import { fr } from "../languages/fr";
import { getLocales } from "expo-localization";
import { ar } from "../languages/ar";
export const i18n = new I18n({
  en: en,
  fr: fr,
  ar: ar,
});
// i18n.locale = "ar"
// i18n.locale = getLocales()[0].languageCode;
// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true;
