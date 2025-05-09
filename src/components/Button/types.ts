import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
}
