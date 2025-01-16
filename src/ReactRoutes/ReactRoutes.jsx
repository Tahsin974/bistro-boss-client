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
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/All-Users/allUsers";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddItems from "../Pages/DashBoard/Add-Items/AddItems";
import ManageItems from "../Pages/DashBoard/Manage-Items/ManageItems";
import UpdateItem from "../Pages/DashBoard/Update-Item/UpdateItem";




const ReactRoutes = () => {
  
  return (
    <div>
      <Routes>
     
        <Route path="/dashboard" element={<PrivateRoute>
          <DashBoard/>
        </PrivateRoute>}>
        <Route path="/dashboard" element={<Cart/>} />  
        {/* Normal User Route*/}
        <Route path="cart" element={<Cart/>} /> 


         {/*Admin Route  */}
        <Route path="all-users" element={<AdminRoute>
          <AllUsers/>
        </AdminRoute>} />  
        <Route path="add-items" element={<AdminRoute>
          <AddItems/>
        </AdminRoute>} /> 
        <Route path="manage-items" element={<AdminRoute>
          <ManageItems/>
        </AdminRoute>} /> 
        <Route path="update-item/:id" element={<AdminRoute>
          <UpdateItem/>
        </AdminRoute>} /> 
        </Route>
      <Route path="/" element={<LayOut/>}>
    <Route path="/" element={<Home/>} />  
    <Route path="home" element={<Home/>} />  
    <Route path="menu" element={<Menu/>} />  
    {/* <Route path="order/:category" element={<PrivateRoute>
      <Order></Order>
    </PrivateRoute>} />   */}
    <Route path="order/:category" element={
      <Order/>
    } />  
    <Route path="contact" element={<Contact/>} />  
    <Route path="login" element={<Login/>} />  
    <Route path="sign-up" element={<SignUp/>} />  
    </Route>


    <Route path="*" element={<ErrorPage/>} />

      </Routes>
    </div>
  );
};

export default ReactRoutes;
