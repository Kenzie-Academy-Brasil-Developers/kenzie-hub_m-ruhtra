import { CreateTechForm } from "../forms/CreateTechForm";
import styles from "./style.module.scss";

export const CreateTechModal = ({ setIsCreateOpen }) => {
  return (
    <div className={styles.modalOverlay} role="dialog">
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h2 className="title modal">Cadastrar Tecnologia</h2>

          <button
            className={styles.btnClose}
            onClick={() => setIsCreateOpen(false)}
          >
            X
          </button>
        </div>

        <div className={styles.formContainer}>
         <CreateTechForm/>
        </div>
      </div>
    </div>
  );
};
