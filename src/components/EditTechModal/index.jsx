import { useContext } from "react";
import { TechContext } from "../../providers/TechProviders";
import { EditTechForm } from "../forms/EditTechForm";

import styles from "./style.module.scss";

export const EditTechModal = () => {
  const {setEditingTech} = useContext(TechContext);

  return (
    <div className={styles.modalOverlay} role="dialog">
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h2 className="title modal">Tecnologia Detalhes</h2>

          <button
            className={styles.btnClose}
            onClick={() => {
              setEditingTech(null);
            }}
          >
            X
          </button>
        </div>

        <div className={styles.formContainer}>
          <EditTechForm/>
        </div>
      </div>
    </div>
  );
};
