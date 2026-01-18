import templateConfig from "./template.config";
import brandingConfig from "./branding.config";
import themeConfig from "./theme.config";
import featuresConfig from "./features.config";
import { ModernTemplate } from "./ModernTemplate";

import en from './i18n/en.json';
import id from './i18n/id.json';

export default {
    config: templateConfig,
    branding: brandingConfig,
    theme: themeConfig,
    features: featuresConfig,
    i18n: {
        en,
        id
    },
    components: ModernTemplate
}   