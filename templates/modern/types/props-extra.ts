import type { ReactNode, ImgHTMLAttributes } from 'react';

// DotIndicator
export type DotIndicatorColor = 'purple' | 'green' | 'gray';
export interface DotIndicatorProps {
    color?: DotIndicatorColor;
}

// Avatar
export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarStatus = 'online' | 'busy' | 'offline' | undefined;
export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    size?: AvatarSize;
    status?: AvatarStatus;
}

// Text
export type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'small' | 'tiny';
export interface TextProps {
    children: ReactNode;
    variant?: TextVariant;
    className?: string;
}

// Icon
export type IconName = 'home' | 'users' | 'layers' | 'barChart';
export interface IconProps {
    name: IconName | string;
    size?: number;
    className?: string;
}
