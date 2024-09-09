import UpperInfos from "../components/UpperInfos";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <UpperInfos />
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
