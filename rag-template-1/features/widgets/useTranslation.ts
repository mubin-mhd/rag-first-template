import { useState, useCallback } from 'react';
import { getAppConfig } from '../../config/app.config';

// Loads translation JSON synchronously (for demo; use async for real apps)
function loadTranslations(domain: string, lang: string): Record<string, string> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require(`../../i18n/${domain}/${lang}.json`);
  } catch {
    return {};
  }
}

export function useTranslation(domain: string) {
  const { locale } = getAppConfig();
  const [lang] = useState(locale || 'en');
  const translations = loadTranslations(domain, lang);

  const t = useCallback(
    (key: string) => translations[key] || key,
    [translations]
  );

  return { t, lang };
}
