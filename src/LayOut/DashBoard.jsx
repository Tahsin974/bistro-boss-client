import {
  FaCalendarAlt,
  FaCreditCard,
  FaEnvelope,
  FaHome,
  FaList,
  FaPlus,
  FaShoppingBag,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";

// bg-[#D1A054]

import { Link, Outlet } from "react-router";
import DynamicTitle from "../Components/DynamicTitle/DynamicTitle";
import useAuthContext from "../Hooks/useAuthContext";
import SideBar from "../Components/SideBar/SideBar";
import { FaBook, FaUsers } from "react-icons/fa6";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const { cart } = useCart();
  const { userLogOut, setUser, setLoading, user } = useAuthContext();
  const handleLogOut = () => {
    userLogOut().then(() => {
      setUser({});
      setLoading(false);
    });
  };
  const [isAdmin] = useAdmin();
  const adminMenuItems = [
    {
      path: "/dashboard/admin-home",
      label: "Admin Home",
      icon: <FaHome size={25} />,
    },
    {
      path: "/dashboard/add-items",
      label: "Add Items",
      icon: <FaUtensils size={25} />,
    },
    {
      path: "/dashboard/manage-items",
      label: "Manage Items",
      icon: <FaList size={25} />,
    },
    {
      path: "/dashboard/cart",
      label: "Manage Bookings",
      icon: <FaBook size={25} />,
    },
    {
      path: "/dashboard/all-users",
      label: "All Users",
      icon: <FaUsers size={25} />,
    },
  ];
  const userMenuItems = [
    {
      path: "/dashboard/user-home",
      label: "User Home",
      icon: <FaHome size={25} />,
    },
    {
      path: "/dashboard/reservation",
      label: "Reservation",
      icon: <FaCalendarAlt size={25} />,
    },
    {
      path: "/dashboard/payment-history",
      label: "Payment History",
      icon: <FaCreditCard size={25} />,
    },
    {
      path: "/dashboard/cart",
      label: "My Cart",
      icon: <FaShoppingCart size={25} />,
      totalItems: cart.length || "0",
    },
    {
      path: "/dashboard/add-review",
      label: "Add Review",
      icon: <FaPlus size={25}></FaPlus>,
    },
    {
      path: "/dashboard/my-bookings",
      label: "My Bookings",
      icon: <FaList size={25}></FaList>,
    },
  ];

  // Shared Nav links
  const pages = [
    {
      path: "/home",
      label: "home",
      icon: <FaHome size={25}></FaHome>,
    },
    {
      path: "/menu",
      label: "menu",
      icon: <FaList size={25}></FaList>,
    },
    {
      path: "/order/salads",
      label: "Shop",
      icon: <FaShoppingBag size={25}></FaShoppingBag>,
    },
    {
      path: "/contact",
      label: "contact",
      icon: <FaEnvelope size={25}></FaEnvelope>,
    },
  ];

  const MenuNavs = isAdmin ? adminMenuItems : userMenuItems;
  return (
    <div className="bg-[#F3F3F3]">
      <DynamicTitle pageName={"Dashboard"}></DynamicTitle>
      <div className="flex">
        <div className="lg:flex hidden">
          <SideBar menuItems={MenuNavs} pages={pages}></SideBar>
        </div>
        <div className="flex-1 ">
          <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="navbar bg-base-300 w-full">
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

                <div className="ms-auto me-3">
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user?.photoURL}
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li>
                        <a>Settings</a>
                      </li>
                      <li>
                        <btn onClick={handleLogOut}>Logout</btn>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Page content here */}
              <div className="p-5">
                <Outlet></Outlet>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <div className="menu bg-[#D1A054] min-h-full w-80 p-4">
                <h2 className="text-2xl ">
                  <span className="cinzel-bold">BISTRO BOSS</span>
                  <br />
                  <span className="cinzel-light text-lg">RESTUARANT</span>
                </h2>
                {/* Sidebar content here */}
                <p className="font-bold text-center mt-4 text-gray-600">Menu</p>
                <ul className="my-2 flex-1">
                  {MenuNavs.map((item) => (
                    <div key={item.index}>
                      <li className={`py-2 cinzel-light`}>
                        <Link
                          to={item.path}
                          className="flex gap-x-4 items-center text-lg uppercase"
                        >
                          <div>{item.icon}</div> <p>{item.label}</p>
                        </Link>
                      </li>
                    </div>
                  ))}
                </ul>
                <p className="font-bold text-center mt-4 text-gray-600">
                  Pages
                </p>
                <ul className="my-2 flex-1">
                  {pages.map((item) => (
                    <div key={item.index}>
                      <li className={`py-2 cinzel-light ${item.class}`}>
                        <Link
                          to={item.path}
                          className="flex gap-x-4 items-center text-lg uppercase"
                        >
                          <div>{item.icon}</div> <p>{item.label}</p>
                        </Link>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
