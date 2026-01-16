// UI config with strong typing and defaults
export type UiConfig = {
    theme: 'light' | 'dark' | 'system';
    primaryColor: string;
};

export const defaultUiConfig: UiConfig = {
    theme: 'system',
    primaryColor: '#2563eb', // Tailwind blue-600
};

let uiConfig: UiConfig = { ...defaultUiConfig };

export function setUiConfig(overrides: Partial<UiConfig>) {
    uiConfig = { ...uiConfig, ...overrides };
}

export function getUiConfig(): UiConfig {
    return uiConfig;
}
