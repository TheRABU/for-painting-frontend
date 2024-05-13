import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Navbar/NavBar";

const Layout = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
