"use client";

import { ReactNode } from "react";
import { AppConfigContext } from "./AppConfigContext";
import { loadTemplate } from "@/core/template";
import { loadTemplateComponents } from "@/core/template/loadTemplateComponents";
import { I18nProvider } from "@/core/i18n/I18nProvider";
import { UIProvider } from "../ui/UIProviders";

type AppProvidersProps = {
  config: any;
  children: ReactNode;
};

export function AppProviders({ config, children }: AppProvidersProps) {
  const lang = "en"; // nanti bisa dari env / route
  const messages = config.i18n?.[lang];

  const template = loadTemplate(process.env.NEXT_PUBLIC_TEMPLATE_ID);
  const components = loadTemplateComponents(template);

  return (
    <AppConfigContext.Provider value={config}>
      <I18nProvider messages={messages}>
        <UIProvider components={components}>{children}</UIProvider>
      </I18nProvider>
    </AppConfigContext.Provider>
  );
}
