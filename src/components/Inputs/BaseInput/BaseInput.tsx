import { FC, InputHTMLAttributes } from "react";
import styles from "./BaseInput.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const BaseInput: FC<Props> = ({ label, ...props }) => {
  return (
    <div className={styles["input-controller"]}>
      {label && <label htmlFor={label}>{label}</label>}
      <input id={label} {...props} />
    </div>
  );
};
