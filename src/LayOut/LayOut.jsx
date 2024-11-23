import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import Menubar from "../Pages/Shared/Navbar/Menubar";

const LayOut = () => {
    return (
        <div>
            <Menubar></Menubar>
            <div className="min-h-screen">

            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;