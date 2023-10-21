import { RoutesMain } from "./routes";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./providers/UserProviders";

function App() {

  return (
    <>
      <UserProvider>
        <RoutesMain />
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </UserProvider>
    </>
  )
}

export default App;
