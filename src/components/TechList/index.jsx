import { TechCard } from "./TechCard";

import btnAdd from "../../assets/btnAdd.svg";
import styles from "./style.module.scss";

import { useContext } from "react";
import { UserContext } from "../../providers/UserProviders";
import { TechContext } from "../../providers/TechProviders";
import { CreateTechModal } from "../CreateTechModal";

export const TechList = () => {
  const { techList } = useContext(UserContext);
  const { isCreateOpen, setIsCreateOpen} = useContext(TechContext);

  return (
    <div className={styles.techListContainer}>
      <div className={styles.headerTechList}>
        <h2 className="title two">Tecnologias</h2>
        <button onClick={() => setIsCreateOpen(true)}>
          <img src={btnAdd} alt="Botão de Adicionar" />
        </button>

        {isCreateOpen ? <CreateTechModal setIsCreateOpen={setIsCreateOpen} /> : null}
      </div>

      <div className={styles.techContainer}>
        {
          techList.length > 0 ? (
            <ul className={styles.techListItens}>
              {techList.map((tech) => (
                <TechCard key={tech.id} tech={tech} />
              ))}
            </ul>
          ) : (
            <h2 className="title two">Sua lista de tecnologias está vazia!</h2>
          )
        }
      </div>

    </div>
  );
};
