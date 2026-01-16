
// App config with strong typing and defaults

export type AppConfig = {
    appName: string;
    locale: string;
    logo: string; // URL or path
    primaryColor: string;
    footerText: string;
};


export const defaultAppConfig: AppConfig = {
    appName: 'RAG UI Starter Kit',
    locale: 'en',
    logo: '/logo.svg',
    primaryColor: '#2563eb',
    footerText: '© 2026 RAG UI Starter Kit',
};

let appConfig: AppConfig = { ...defaultAppConfig };

export function setAppConfig(overrides: Partial<AppConfig>) {
    appConfig = { ...appConfig, ...overrides };
}

export function getAppConfig(): AppConfig {
    return appConfig;
}
