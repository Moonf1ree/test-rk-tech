import type { FC } from "react";
import type { ICheckboxProps } from "./types";
import styles from "./Checkbox.module.css";
import clsx from "clsx";

const Checkbox: FC<ICheckboxProps> = ({
  id,
  label,
  checked,
  disabled = false,
  onChange,
  style,
  className,
  value,
}) => {
  return (
    <label
      className={clsx(styles.label, className)}
      style={style}
      data-ui-checkbox
      data-testid="checkbox"
    >
      <div>
        <input
          type="checkbox"
          id={id}
          checked={onChange ? checked : undefined}
          defaultChecked={!onChange ? checked : undefined}
          disabled={disabled}
          onChange={onChange}
          value={value}
          aria-label={label || "checkbox"}
        />
      </div>
      {label && <span>{label}</span>}
    </label>
  );
};
export default Checkbox;
