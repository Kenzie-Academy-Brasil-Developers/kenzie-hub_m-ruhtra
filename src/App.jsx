import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <RoutesMain />
      <ToastContainer position="top-right" autoClose={3000} theme="dark"
      />
    </>
  )
}

export default App;
