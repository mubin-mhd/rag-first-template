// ...existing code...
import "../app/theme.css";
import { getUiConfig } from "../config/ui.config";
import { defaultConfig, mergeConfig } from "@/core/config";
import { loadTemplate } from "@/core/template";
import { AppProviders } from "./AppProviders";

const template = loadTemplate(process.env.NEXT_PUBLIC_TEMPLATE_ID);

const appConfig = mergeConfig(defaultConfig, {
  branding: template.branding,
  theme: template.theme,
  features: template.features,
  i18n: template.i18n,
  config: template.config,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = getUiConfig();
  return (
    <html lang="en">
      <body data-theme={theme}>
        <AppProviders config={appConfig}>{children}</AppProviders>
      </body>
    </html>
  );
}
