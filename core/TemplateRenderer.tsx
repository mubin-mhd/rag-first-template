"use client";
import { loadTemplate } from "./template/loadTemplate";
import { loadTemplateComponents } from "./template/loadTemplateComponents";
import { useAppConfig } from "./hooks/useAppConfig";
import { useChatController } from "./hooks/useChatController";
import { useT } from "./i18n/I18nProvider";

export function TemplateRenderer() {
  const appConfig = useAppConfig();
  const chatController = useChatController();
  const t = useT();

  const features = {
    chat: chatController,
  };

  console.log("App Config in TemplateRenderer:", appConfig);
  const template = loadTemplate(process.env.NEXT_PUBLIC_TEMPLATE_ID);

  const TemplateComponent = loadTemplateComponents(template);

  return <TemplateComponent config={appConfig} features={features} t={t} />;
}
