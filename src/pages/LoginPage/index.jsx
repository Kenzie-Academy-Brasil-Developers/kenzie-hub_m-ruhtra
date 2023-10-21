import { Header } from "../../components/Header";
import { LoginForm } from "../../components/forms";
import styles from "./style.module.scss";

export const LoginPage = () => {
  return (
    <div className="pageContainer">
      <div className={styles.headerContainer}>
        <Header />
      </div>

      <div className={styles.loginPageContainer}>
        <h1 className="title one">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};
