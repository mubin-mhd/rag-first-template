import { useContext } from 'react';
import { AppConfigContext } from '../providers/AppConfigContext';

export function useAppConfig() {
    const config = useContext(AppConfigContext);

    if (!config) {
        throw new Error('useAppConfig must be used inside AppConfigProvider');
    }

    return config;
}
