import styles from "./style.module.scss";
import btnDelete from "../../../assets/btnDelete.svg";
import btnEdit from "../../../assets/btnEdit.svg";

export const TechCard = () => {
  return (
    <div className={styles.cardContainer}>
      <h2 className="title card">React</h2>

      <div className={styles.infoCard}>
        <p className="paragraph card">nível</p>

        <div className={styles.btnsCard}>
          <button className={styles.btnCard}>
            <img src={btnEdit} alt="Botão de Editar" className={styles.btnEdit} />
          </button>
          <button>
            <img src={btnDelete} alt="Botão de Deletar" className={styles.btnDelete} />
          </button>
        </div>
      </div>
    </div>
  );
};
