import "./root.css";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SearchPanel from "../components/SearchPanel";

function Root() {
  return (
    <>
      <NavBar />
      <SearchPanel />
      <Outlet />
    </>
  );
}

export default Root;
