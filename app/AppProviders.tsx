import { I18nProvider } from "@/core/i18n/I18nProvider";

export function AppProviders({ config, children }) {
  const lang = "en"; // nanti bisa env / param
  const messages = config.i18n[lang];

  return <I18nProvider messages={messages}>{children}</I18nProvider>;
}
