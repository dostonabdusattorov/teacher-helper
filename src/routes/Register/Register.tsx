import { RegisterComponent } from "../../components";
import styles from "./Register.module.scss";

export const RegisterRoute = () => {
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <RegisterComponent />
      </div>
    </main>
  );
};
