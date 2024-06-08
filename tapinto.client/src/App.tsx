import { Container } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import NavigationBar from "./app/navbar/NavigationBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const appLocation = useLocation();
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      {!appLocation.pathname.toLocaleLowerCase().includes("login") &&
        !appLocation.pathname.toLocaleLowerCase().includes("register") ?
       (<>
          <NavigationBar />
          <Container>
            <Outlet />
          </Container>
        </>) : (<Outlet />)}
    </>
  );
}

export default App;
