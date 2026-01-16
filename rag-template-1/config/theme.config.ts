export type Theme = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  border: string;
  [key: string]: string;
}

export interface ThemeConfig {
  light: ThemeColors;
  dark: ThemeColors;
}

export const defaultThemeConfig: ThemeConfig = {
  light: {
    background: 'var(--color-bg-light)',
    foreground: 'var(--color-fg-light)',
    primary: 'var(--color-primary-light)',
    secondary: 'var(--color-secondary-light)',
    border: 'var(--color-border-light)',
  },
  dark: {
    background: 'var(--color-bg-dark)',
    foreground: 'var(--color-fg-dark)',
    primary: 'var(--color-primary-dark)',
    secondary: 'var(--color-secondary-dark)',
    border: 'var(--color-border-dark)',
  },
};

let themeConfig: ThemeConfig = { ...defaultThemeConfig };

export function setThemeConfig(overrides: Partial<ThemeConfig>) {
  themeConfig = { ...themeConfig, ...overrides };
}

export function getThemeConfig(): ThemeConfig {
  return themeConfig;
}
