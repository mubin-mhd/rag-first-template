// ...existing code...
import '../app/theme.css';
import { getUiConfig } from '../config/ui.config';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = getUiConfig();
  return (
    <html lang="en">
      <body data-theme={theme}>{children}</body>
    </html>
  );
}
