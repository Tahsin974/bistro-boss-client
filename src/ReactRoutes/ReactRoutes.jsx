import { Route, Routes } from "react-router";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/HomePage/Home/Home"
import MenuPage from "../Pages/MenuPage/MenuPage";
import ShopPage from "../Pages/ShopPage/ShopPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";

const ReactRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LayOut></LayOut>}>
    <Route path="/" element={<Home></Home>} />  
    <Route path="home" element={<Home></Home>} />  
    <Route path="menu" element={<MenuPage></MenuPage>} />  
    <Route path="shop" element={<ShopPage></ShopPage>} />  
    <Route path="contact" element={<ContactPage></ContactPage>} />  
    <Route path="login" element={<LoginPage></LoginPage>} />  
    <Route path="sign-up" element={<SignUpPage></SignUpPage>} />  
    </Route>
      </Routes>
    </div>
  );
};

export default ReactRoutes;
