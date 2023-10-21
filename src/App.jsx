import { RoutesMain } from "./routes";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { UserContext } from "./providers/UserProviders";
import { useContext } from "react";
import { Loading } from "./components/Loading";

function App() {
  const { loading } = useContext(UserContext);

  return (
    <>
      {loading ? <Loading /> : <RoutesMain />}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  )
}

export default App;
