import { FC, InputHTMLAttributes, useState } from "react";
import { BaseInput } from "../BaseInput";
import { useTranslation } from "react-i18next";
import { Eye, EyeOff } from "../../../assets";

import styles from "./PasswordInput.module.scss";

export const PasswordInput: FC<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const [inputType, setInputType] = useState("password");
  const [t] = useTranslation("global");

  return (
    <div className={styles.passwordInput}>
      <BaseInput label={t("password")} type={inputType} {...props} />
      <button
        type="button"
        onClick={() =>
          setInputType((prev) => (prev === "password" ? "text" : "password"))
        }
      >
        {inputType === "password" ? <EyeOff /> : <Eye />}
      </button>
    </div>
  );
};
