import { Header } from "../../components/Header";
import styles from "./style.module.scss";

import { useContext } from "react";
import { UserContext } from "../../providers/UserProviders";
import { TechList } from "../../components/TechList";

export const DashboardPage = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <div className="pageContainer">
      <div className={styles.headerContainer}>
        <Header />
        <button className="btn out" onClick={() => userLogout()}>Sair</button>
      </div>

      <div className={styles.infoUserContainer}>
        <h1 className="title one">Olá, {user?.name}</h1>
        <p className="headline bold">{user?.course_module}</p>
      </div>

      <div className={styles.techContainer}>
        <TechList />
      </div>
    </div>
  );
};
