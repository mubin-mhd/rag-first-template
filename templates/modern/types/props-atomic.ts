import type { ReactNode, ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';

// Shared
export interface BaseComponentProps {
    className?: string;
    children?: ReactNode;
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Status = 'success' | 'warning' | 'error' | 'info' | 'neutral';

// Button
export type ButtonVariant = 'primary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
    children?: ReactNode;
    icon?: ReactNode;
}

// IconButton
export type IconButtonVariant = ButtonVariant;
export type IconButtonSize = ButtonSize;
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    icon: ReactNode;
    'aria-label': string;
    isLoading?: boolean;
    rounded?: boolean;
    className?: string;
}

// Card
export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    padding?: CardPadding;
    hoverable?: boolean;
    clickable?: boolean;
    header?: ReactNode;
    footer?: ReactNode;
    className?: string;
    children?: ReactNode;
}

// Badge
export type BadgeVariant = 'solid' | 'soft' | 'outline' | 'default' | 'primary' | 'success' | 'warning';
export type BadgeSize = 'sm' | 'md';
export type BadgeStatus = Status;
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    size?: BadgeSize;
    status?: BadgeStatus;
    icon?: ReactNode;
    dot?: boolean;
    className?: string;
    children?: ReactNode;
}

// Input
export type InputSize = 'sm' | 'md' | 'lg';
export type InputStatus = Extract<Status, 'error' | 'success'> | 'default';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: InputSize;
    status?: InputStatus;
    label?: string;
    helperText?: string;
    errorMessage?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    fullWidth?: boolean;
    wrapperClassName?: string;
    className?: string;
}
