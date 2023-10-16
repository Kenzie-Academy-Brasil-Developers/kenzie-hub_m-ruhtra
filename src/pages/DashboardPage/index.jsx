import { Header } from "../../components/Header";
import styles from "./style.module.scss";

export const DashboardPage = ({ user, userLogout }) => {
  return (
    <div className="pageContainer">
      <div className={styles.headerContainer}>
        <Header />
        <button className="btn out" onClick={() => userLogout()}>Sair</button>
      </div>

      <div className={styles.infoUserContainer}>
        <h1 className="title one">Olá, {user.name}</h1>
        <p className="headline bold">{user.course_module}</p>
      </div>

      <div className={styles.contentContainer}>
        <h2 className="title one">Que pena! Estamos em desenvolvimento :&#40;</h2>
        <p className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades.</p>
      </div>
    </div>
  );
};
