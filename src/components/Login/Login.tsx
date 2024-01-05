import { useTranslation } from "react-i18next";
import { FaceBook, Google, images } from "../../assets";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";
import { Button } from "../Button";
import { BaseInput, PasswordInput } from "../Inputs";
import { usePhoneNumber } from "../../hooks";
import { FormEvent, useState } from "react";

export const LoginComponent = () => {
  const [t] = useTranslation("global");

  const [phoneNumber, formattedPhoneNumber, setPhoneNumber] = usePhoneNumber();
  const [password, setPassword] = useState("");

  const loginSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ phoneNumber, password });
  };

  return (
    <section className={styles.login}>
      <div className={styles.sidebar}>
        <img src={images.businessDeal} alt="2 person dealing" />
      </div>
      <div className={styles.action}>
        <form className={styles.form} onSubmit={loginSubmitHandler}>
          <h1 className={styles.heading}>{t("login")}</h1>
          <p className={styles["offer-register"]}>
            <span>{t("don't have an account yet?")}</span>
            <Link to={Routes.Register}>{t("register")}</Link>
          </p>
          <div className={styles["login-input"]}>
            <BaseInput
              placeholder={t("phone number")}
              label={t("login")}
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
          <div className={styles["forgot-password"]}>
            <Link to={"#"}>{t("forgot your password")}</Link>
          </div>
          <Button variant="contained" type="submit">
            {t("login")}
          </Button>
        </form>
        <div className={styles.or}>
          <div></div>
          <span>{t("or")}</span>
          <div></div>
        </div>
        <div className={styles.others}>
          <Button variant="outlined">
            <Google /> {t("login with google")}
          </Button>
          <Button variant="contained" color="#1877F2">
            <FaceBook /> {t("login with facebook")}
          </Button>
        </div>
      </div>
    </section>
  );
};
