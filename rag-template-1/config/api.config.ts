// API config with strong typing and defaults
export type ApiConfig = {
    baseUrl: string;
    timeout: number;
};

export const defaultApiConfig: ApiConfig = {
    baseUrl: 'https://api.example.com',
    timeout: 10000,
};

let apiConfig: ApiConfig = { ...defaultApiConfig };

export function setApiConfig(overrides: Partial<ApiConfig>) {
    apiConfig = { ...apiConfig, ...overrides };
}

export function getApiConfig(): ApiConfig {
    return apiConfig;
}
