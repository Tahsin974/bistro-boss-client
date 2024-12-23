import { Route, Routes } from "react-router";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/HomePage/Home/Home"
import Menu from "../Pages/MenuPage/Menu/Menu";
import Order from "../Pages/OrderPage/Order/Order";
import Contact from "../Pages/ContactPage/Contact/Contact";
import Login from "../Pages/LoginPage/Login/Login"
import SignUp from "../Pages/SignUpPage/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../LayOut/DashBoard";
import Cart from "../Pages/DashBoard/Cart";



const ReactRoutes = () => {
  return (
    <div>
      <Routes>
     
        <Route path="/dashboard" element={<PrivateRoute>
          <DashBoard></DashBoard>
        </PrivateRoute>}>
        <Route path="/dashboard" element={<Cart></Cart>} />  
        <Route path="/dashboard/cart" element={<Cart></Cart>} />  
        
        </Route>
      <Route path="/" element={<LayOut></LayOut>}>
    <Route path="/" element={<Home></Home>} />  
    <Route path="home" element={<Home></Home>} />  
    <Route path="menu" element={<Menu></Menu>} />  
    {/* <Route path="order/:category" element={<PrivateRoute>
      <Order></Order>
    </PrivateRoute>} />   */}
    <Route path="order/:category" element={
      <Order></Order>
    } />  
    <Route path="contact" element={<Contact></Contact>} />  
    <Route path="login" element={<Login></Login>} />  
    <Route path="sign-up" element={<SignUp></SignUp>} />  
    </Route>

      </Routes>
    </div>
  );
};

export default ReactRoutes;
