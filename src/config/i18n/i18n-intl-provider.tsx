"use client";

import { IntlProvider } from "react-intl";
import * as Spanish from "../../static/lang/es.json";
import * as English from "../../static/lang/en.json";
import * as Portuguese from "../../static/lang/pt.json";

interface I8nProviderProps {
  readonly children: React.ReactNode;
}

/** this HOCs wrapps client components for CSR comps and enable i18n */
export default function I18nIntlProvider({ children }: I8nProviderProps) {
  const languageCode = process.env.NEXT_PUBLIC_COUNTRY_LANGUAGE ?? "";
  let messages: Record<string, any> = English;
  switch (languageCode) {
    case "es":
      messages = Spanish;
      break;
    case "pt":
      messages = Portuguese;
      break;
    default:
      messages = English;
      break;
  }

  return (
    <IntlProvider locale={languageCode} messages={messages}>
      {children}
    </IntlProvider>
  );
}
