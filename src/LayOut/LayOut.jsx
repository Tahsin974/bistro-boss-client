import { Outlet, useLocation } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import Menubar from "../Pages/Shared/Navbar/Menubar";

const LayOut = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/sign-up") ||
    location.pathname.includes("/secret");
  return (
    <div>
      {noHeaderFooter ? (
        <div className="min-h-screen ">
          <Outlet></Outlet>
        </div>
      ) : (
        <Menubar>
          <div className="min-h-screen ">
            <Outlet></Outlet>
          </div>
        </Menubar>
      )}

      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default LayOut;
