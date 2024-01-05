import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "contained" | "outlined";
  color?: string;
}

export const Button: FC<Props> = ({ variant, color, ...props }) => (
  <button
    className={classNames(styles.btn, {
      [styles.contained]: variant === "contained",
      [styles.outlined]: variant === "outlined",
    })}
    style={{ backgroundColor: color }}
    {...props}
  />
);
