import type { FC } from "react";
import type { IButtonProps } from "./types";
import clsx from "clsx";
import styles from "./Button.module.css";

const Button: FC<IButtonProps> = ({ children, className, style, ...props }) => {
  return (
    <button
      className={clsx(styles["button-base"], className)}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
