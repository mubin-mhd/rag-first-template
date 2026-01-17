import { templateRegistry } from './templateRegistry'

export function loadTemplate(templateId?: string) {
    const id = templateId || 'modern'

    const template = templateRegistry[id]

    if (!template) {
        throw new Error(`Template "${id}" not found`)
    }

    return template
}
