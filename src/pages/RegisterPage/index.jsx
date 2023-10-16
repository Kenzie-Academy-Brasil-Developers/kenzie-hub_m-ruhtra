import { Header } from "../../components/Header";

import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/forms";
import styles from "./style.module.scss";

export const RegisterPage = () => {
  return (
    <div className="pageContainer">
      <div className={styles.headerContainer}>
        <Header />
        <button className="btn back"><Link className="link" to="/">Voltar</Link></button>
      </div>

      <div className={styles.registerPageContainer}>
        <h1 className="title one">Crie sua conta</h1>
        <p className="headline">Rápido e grátis, vamos nessa</p>

        <RegisterForm />
      </div>
    </div>
  );
};
