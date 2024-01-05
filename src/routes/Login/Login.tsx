import { LoginComponent } from "../../components";
import styles from "./Login.module.scss";

export const LoginRoute = () => {
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <LoginComponent />
      </div>
    </main>
  );
};
