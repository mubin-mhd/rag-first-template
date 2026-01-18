"use client";
import { loadTemplate } from "./template/loadTemplate";
import { loadTemplateComponents } from "./template/loadTemplateComponents";
import { useAppConfig } from "./hooks/useAppConfig";

export function TemplateRenderer() {
  const appConfig = useAppConfig();

  console.log("App Config in TemplateRenderer:", appConfig);
  const template = loadTemplate(process.env.NEXT_PUBLIC_TEMPLATE_ID);

  const TemplateComponent = loadTemplateComponents(template);

  return <TemplateComponent config={appConfig} />;
}
