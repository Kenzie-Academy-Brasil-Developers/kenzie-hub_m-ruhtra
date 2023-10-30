import styles from "./style.module.scss";
import btnDelete from "../../../assets/btnDelete.svg";
import btnEdit from "../../../assets/btnEdit.svg";

import { useContext } from "react";
import { TechContext } from "../../../providers/TechProviders";
import { EditTechModal } from "../../EditTechModal";

export const TechCard = ({tech}) => {
  const { setIsEditOpen, deleteTech, editingTech, setEditingTech} = useContext(TechContext);

  return (
    <li className={styles.cardContainer}>
      <h2 className="title card">{tech.title}</h2>

      <div className={styles.infoCard}>
        <p className="paragraph card">{tech.status}</p>

        <div className={styles.btnsCard}>
          <button 
            title="Editar" 
            aria-label="edit"
            onClick={() => setEditingTech(tech)}
          >
            <img src={btnEdit} alt="Botão de Editar" className={styles.btnEdit} />
          </button>

          {editingTech ? <EditTechModal techTitle={editingTech} setIsEditOpen={setIsEditOpen}/> : null}

          <button 
            title="Deletar" 
            aria-label="delete"
            onClick={() => deleteTech(tech.id)}
          >
            <img src={btnDelete} alt="Botão de Deletar" className={styles.btnDelete} />
          </button>

        </div>
      </div>
    </li>
  );
};
