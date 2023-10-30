import { useContext } from "react";
import { TechContext } from "../../providers/TechProviders";
import { EditTechForm } from "../forms/EditTechForm";

export const EditTechModal = () => {
  const {setEditingTech} = useContext(TechContext);

  return (
    <div className="modalOverlay" role="dialog">
      <div className="modalContainer">
        <div className="modalHeader">
          <h2 className="title modal">Tecnologia Detalhes</h2>

          <button
            className="btnClose"
            onClick={() => {
              setEditingTech(null);
            }}
          >
            X
          </button>
        </div>

        <div className="formModalContainer">
          <EditTechForm/>
        </div>
      </div>
    </div>
  );
};
