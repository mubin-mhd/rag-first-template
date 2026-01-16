// Features config with strong typing and defaults

export type FeaturesConfig = {
    chat: boolean;
    upload: boolean;
    citations: boolean;
    widgets: boolean;
    enableUpload: boolean;
    enableCitations: boolean;
    enableStreaming: boolean;
    enableWidgetMode: boolean;
};


export const defaultFeaturesConfig: FeaturesConfig = {
    chat: true,
    upload: true,
    citations: true,
    widgets: true,
    enableUpload: true,
    enableCitations: true,
    enableStreaming: true,
    enableWidgetMode: false,
};

let featuresConfig: FeaturesConfig = { ...defaultFeaturesConfig };

export function setFeaturesConfig(overrides: Partial<FeaturesConfig>) {
    featuresConfig = { ...featuresConfig, ...overrides };
}

export function getFeaturesConfig(): FeaturesConfig {
    return featuresConfig;
}
