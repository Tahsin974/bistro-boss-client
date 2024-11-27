import { Route, Routes } from "react-router";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/HomePage/Home/Home"
import ContactPage from "../Pages/ContactPage/ContactPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import Menu from "../Pages/MenuPage/Menu/Menu";
import Order from "../Pages/OrderPage/Order/Order";

const ReactRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LayOut></LayOut>}>
    <Route path="/" element={<Home></Home>} />  
    <Route path="home" element={<Home></Home>} />  
    <Route path="menu" element={<Menu></Menu>} />  
    <Route path="order" element={<Order></Order>} />  
    <Route path="contact" element={<ContactPage></ContactPage>} />  
    <Route path="login" element={<LoginPage></LoginPage>} />  
    <Route path="sign-up" element={<SignUpPage></SignUpPage>} />  
    </Route>
      </Routes>
    </div>
  );
};

export default ReactRoutes;
