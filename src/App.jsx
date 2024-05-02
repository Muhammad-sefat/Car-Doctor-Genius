import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Conponents/Pages/Navbar";
import Footer from "./Conponents/Pages/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
