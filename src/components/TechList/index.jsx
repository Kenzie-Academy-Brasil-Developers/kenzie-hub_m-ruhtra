import { TechCard } from "./TechCard";
import btnAdd from "../../assets/btnAdd.svg";
import styles from "./style.module.scss";

export const TechList = () => {
  return(
    <div className={styles.techListContainer}>
      <div className={styles.headerTechList}>
        <h2 className="title two">Tecnologias</h2>
        <button>
          <img src={btnAdd} alt="Botão de Adicionar" />
        </button>
      </div>

      <ul className={styles.techListItens}>
        <TechCard/>
      </ul>
    </div>
  );
};