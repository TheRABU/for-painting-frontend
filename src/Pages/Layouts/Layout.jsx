import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";
const Layout = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="h-screen">
        <Outlet />
      </div>

      <div>
        <hr className=" bg-slate-300" />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
