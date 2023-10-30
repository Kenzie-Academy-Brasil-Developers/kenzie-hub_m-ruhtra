import { CreateTechForm } from "../forms/CreateTechForm";

export const CreateTechModal = ({ setIsCreateOpen }) => {
  return (
    <div className="modalOverlay" role="dialog">
      <div className="modalContainer">
        <div className="modalHeader">
          <h2 className="title modal">Cadastrar Tecnologia</h2>

          <button
            className="btnClose"
            onClick={() => setIsCreateOpen(false)}
          >
            X
          </button>
        </div>

        <div className="formModalContainer">
         <CreateTechForm/>
        </div>
      </div>
    </div>
  );
};
