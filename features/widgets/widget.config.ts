export type WidgetMode = 'standalone' | 'embed' | 'floating';

export interface WidgetConfig {
  mode: WidgetMode;
  containerId?: string; // For embed mode
  floatingPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export const defaultWidgetConfig: WidgetConfig = {
  mode: 'standalone',
  containerId: undefined,
  floatingPosition: 'bottom-right',
};

let widgetConfig: WidgetConfig = { ...defaultWidgetConfig };

export function setWidgetConfig(overrides: Partial<WidgetConfig>) {
  widgetConfig = { ...widgetConfig, ...overrides };
}

export function getWidgetConfig(): WidgetConfig {
  return widgetConfig;
}
