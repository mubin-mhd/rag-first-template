export type ComponentMap = {
    ChatLayout?: React.FC<any>
    Sidebar?: React.FC<any>
}

export function loadTemplateComponents(template: any): ComponentMap {
    return template.components || {}
}
