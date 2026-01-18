export type ColorPalette = {
    [key: string]: string | ColorPalette;
};

export type Tokens = {
    colors: {
        primary: ColorPalette;
        neutral: ColorPalette;
        success: ColorPalette;
        warning: ColorPalette;
        error: ColorPalette;
        info: ColorPalette;
        surface: ColorPalette;
    };
    radius: Record<string, string>;
    shadows: Record<string, string>;
    typography: {
        fontFamily: Record<string, string[]>;
        fontSize: Record<string, [string, { lineHeight: string }]>;
        fontWeight: Record<string, string>;
    };
    spacing: Record<string, string>;
    transitions: {
        duration: Record<string, string>;
        timing: Record<string, string>;
    };
    zIndex: Record<string, number>;
};

export type ColorToken = keyof Tokens['colors'];
export type RadiusToken = keyof Tokens['radius'];
export type ShadowToken = keyof Tokens['shadows'];
export type SpacingToken = keyof Tokens['spacing'];
