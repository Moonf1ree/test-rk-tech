import type { ChangeEventHandler, CSSProperties } from "react";

export interface ICheckboxProps {
  id?: string;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  style?: CSSProperties;
  value?: string;
}
