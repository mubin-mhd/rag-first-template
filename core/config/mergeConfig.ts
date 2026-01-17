export function mergeConfig(
    base: Record<string, any>,
    override: Record<string, any>
) {
    return {
        ...base,
        ...override,
        branding: {
            ...base.branding,
            ...override.branding
        },
        theme: {
            ...base.theme,
            ...override.theme
        },
        features: {
            ...base.features,
            ...override.features
        }
    }
}
