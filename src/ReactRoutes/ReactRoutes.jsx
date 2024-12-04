import { Route, Routes } from "react-router";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/HomePage/Home/Home"
import Menu from "../Pages/MenuPage/Menu/Menu";
import Order from "../Pages/OrderPage/Order/Order";
import Contact from "../Pages/ContactPage/Contact/Contact";
import Login from "../Pages/LoginPage/Login";
import SignUp from "../Pages/SignUpPage/SignUp/SignUp";

const ReactRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LayOut></LayOut>}>
    <Route path="/" element={<Home></Home>} />  
    <Route path="home" element={<Home></Home>} />  
    <Route path="menu" element={<Menu></Menu>} />  
    <Route path="order/:category" element={<Order></Order>} />  
    <Route path="contact" element={<Contact></Contact>} />  
    <Route path="login" element={<Login></Login>} />  
    <Route path="sign-up" element={<SignUp></SignUp>} />  
    </Route>
      </Routes>
    </div>
  );
};

export default ReactRoutes;
