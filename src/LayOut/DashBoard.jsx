import {
  
  FaCalendarAlt,
  FaCreditCard,
  FaEnvelope,
  FaHome,
  FaList,
  FaPlus,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";

import { Link, Outlet } from "react-router";
import DynamicTitle from "../Components/DynamicTitle/DynamicTitle";
import useAuthContext from "../Hooks/useAuthContext";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
  const {cart} = useCart()
  const {userLogOut,setUser,setLoading} = useAuthContext();
  const handleLogOut = () =>{
    userLogOut()
    .then(()=>{
      setUser({})
      setLoading(false)
    })
  }

  const navs = <>
  <li>
              <Link to='/dashboard/user-home' >
              <FaHome />
              User Home</Link>
            </li>
            <li>
              <Link
              to='/dashboard/reservation'
              ><FaCalendarAlt />Reservation</Link>
            </li>
            <li>
              <Link 
              to='/dashboard/payment-history'
              >
              <FaCreditCard></FaCreditCard>
              Payment History</Link>
            </li>
            <li>
              <Link to='/dashboard/cart'><FaShoppingCart />
              My Cart<div className="badge">{cart.length}</div></Link>
            </li>
            <li>
              <Link
              to='/dashboard/add-review'
              >
              <FaPlus></FaPlus>
              Add Review</Link>
            </li>
            <li>
              <Link 
              to='/dashboard/my-bookings'>
              <FaList />

              My Bookings</Link>
            </li>
            
            <hr className="my-5" />
            <li>
              <Link to='/home' >
              <FaHome />
              Home</Link>
            </li>
            <li>
              <Link to='/menu'>
              <FaList />

              Menu</Link>
            </li>
            <li>
              <Link to='/order/salads'>
              <FaShoppingBag />

              Shop</Link>
            </li>
            <li>
              <Link to='/contact'>
              <FaEnvelope />

              Contact</Link>
            </li>
  </>
  return (
    <div className="bg-[#F3F3F3]">
      <DynamicTitle pageName={"Dashboard"}></DynamicTitle>
      <div className="navbar bg-[#D1A054] text-black   ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">
            <p className=" text-center  text-black  lg:text-lg text-md ">
                <span className="cinzel-bold">BISTRO BOSS</span>
                <br />
                <span
                  className="cinzel-light
"
                >
                  RESTUARANT
                </span>
              </p>
            </div>
            <div className="navbar-end">
            <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><button onClick={handleLogOut} className="btn bg-gray-200 border-gray-200 hover:border-gray-200 text-black lg:btn-md md:btn-md btn-sm ">LogOut</button></li>

        </ul>
            </div>
          </div>
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:flex items-center">
          {/* Navbar */}
          <div className="bg-[#D1A054] min-h-full  text-black  w-64 p-4 cinzel-medium hidden lg:flex ">
          <ul className="menu text-xl">
          
            {/* Sidebar content here */}
            {navs}
            
          </ul>
          </div>
          {/* Page content here */}
          <div className="my-6 flex-1">
            
          <Outlet></Outlet>
          </div>
          
        </div>
        <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        
          <ul className="menu bg-[#D1A054] text-black min-h-full w-60 p-4 cinzel-medium text-xl">
          <p className="lg:hidden text-center  text-white  lg:text-lg text-md pb-6">
                <span className="cinzel-bold">BISTRO BOSS</span>
                <br />
                <span
                  className="cinzel-light
"
                >
                  RESTUARANT
                </span>
              </p>
            {/* Sidebar content here */}
            {navs}
            
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
