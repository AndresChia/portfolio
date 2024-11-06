import "server-only";

// Tul i18n :)
// Just add the missing key-value dictionary with values
const dictionaries: any = {
  en: () =>
    import("../../static/lang/en.json").then((module) => module.default),
  es: () =>
    import("../../static/lang/es.json").then((module) => module.default),
  pt: () =>
    import("../../static/lang/pt.json").then((module) => module.default),
};

// export func
export const getDictionary = async (
  locale: string = process.env.NEXT_PUBLIC_COUNTRY_LANGUAGE ?? "es"
) => dictionaries[locale]();
