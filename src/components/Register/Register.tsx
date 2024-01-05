import { useTranslation } from "react-i18next";
import { FaceBook, Google, images } from "../../assets";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";
import { Button } from "../Button";
import { BaseInput, PasswordInput } from "../Inputs";
import { usePhoneNumber } from "../../hooks";
import { FormEvent, useState } from "react";

export const RegisterComponent = () => {
  const [t] = useTranslation("global");

  const [phoneNumber, formattedPhoneNumber, setPhoneNumber] = usePhoneNumber();
  const [password, setPassword] = useState("");

  const registerSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ phoneNumber, password });
  };

  return (
    <section className={styles.register}>
      <div className={styles.sidebar}>
        <img src={images.businessDeal} alt="2 person dealing" />
      </div>
      <div className={styles.action}>
        <form className={styles.form} onSubmit={registerSubmitHandler}>
          <h1 className={styles.heading}>{t("register")}</h1>
          <p className={styles["offer-register"]}>
            <span>{t("already have an account?")}</span>
            <Link to={Routes.Login}>{t("login")}</Link>
          </p>
          <div className={styles["register-input"]}>
            <BaseInput
              placeholder={t("phone number")}
              label={t("register")}
              value={formattedPhoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <div className={styles["password-input"]}>
            <PasswordInput
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <Button variant="contained" type="submit">
            {t("register")}
          </Button>
        </form>
        <div className={styles.or}>
          <div></div>
          <span>{t("or")}</span>
          <div></div>
        </div>
        <div className={styles.others}>
          <Button variant="outlined">
            <Google /> {t("register with google")}
          </Button>
          <Button variant="contained" color="#1877F2">
            <FaceBook /> {t("register with facebook")}
          </Button>
        </div>
      </div>
    </section>
  );
};
