import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../../../Hooks/useAuthContext";
import useCart from "../../../Hooks/useCart";
import "./Menubar.css";
import useAdmin from "../../../Hooks/useAdmin";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";

const Menubar = ({ children }) => {
  const { user, userLogOut, setUser, setLoading } = useAuthContext();
  const navigate = useNavigate();
  const { cart } = useCart();
  const [isAdmin] = useAdmin();
  const handleLogOut = () => {
    userLogOut().then(() => {
      setUser({});
      setLoading(false);
      navigate("/");
    });
  };
  const viewCartButton = (
    <>
      <Link to="/dashboard/cart">
        <div className="indicator">
          <FaShoppingCart className="text-2xl text-green-400 cursor-pointer" />
          <span className="badge badge-sm indicator-item bg-red-600 border-red-600 text-white">
            {cart.length}
          </span>
        </div>
      </Link>
    </>
  );
  const navOptions = (
    <>
      <li>
        <Link to="/" className="text-white font-light hover:text-orange-500">
          HOME
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="text-white font-light hover:text-orange-500"
        >
          CONTACT US
        </Link>
      </li>
      {user?.email && (
        <li>
          <Link
            to={isAdmin ? "/dashboard/admin-home" : "/dashboard/user-home"}
            className="text-white font-light hover:text-orange-500"
          >
            DASHBOARD
          </Link>
        </li>
      )}
      <li>
        <Link
          to="/menu"
          className="text-white font-light  hover:text-orange-500"
        >
          OUR MENU
        </Link>
      </li>
      <li>
        <Link
          to="/order/salads"
          className="text-white font-light hover:text-orange-500"
        >
          ORDER FOOD
        </Link>
      </li>
    </>
  );
  const drawerRef = useRef(null);
  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  };

  return (
    <div className="drawer">
      <input
        ref={drawerRef}
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="sticky top-0 z-10 bg-neutral-900">
          <div className="navbar lg:fixed lg:z-10 bg-neutral-900/60  text-white lg:px-10 md:px-10 px-2 max-w-[1250px] mx-auto">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost "
              >
                <RxHamburgerMenu size={20} />
              </label>
            </div>
            <div className="navbar-start">
              <p className="   text-white  lg:text-lg text-md">
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
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navOptions}</ul>
            </div>
            <div className="navbar-end flex items-center gap-8">
              <div>{viewCartButton}</div>
              <div>
                {user?.email ? (
                  <details className="dropdown dropdown-end	">
                    <summary className="btn btn-ghost btn-circle m-1">
                      <div className="avatar">
                        <div className="  rounded-full">
                          <img
                            src={
                              user?.photoURL ||
                              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            }
                          />
                        </div>
                      </div>
                    </summary>
                    <ul className="menu dropdown-content bg-white rounded-box z-1 w-52 p-2 shadow-sm text-black">
                      <li>
                        <a>Profile</a>
                      </li>
                      <li>
                        <a onClick={handleLogOut}>LogOut</a>
                      </li>
                    </ul>
                  </details>
                ) : (
                  <Link to="/login">
                    <button className="btn lg:btn-md md:btn-sm btn-xs btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white rounded-none">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side z-20 ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-black bg-opacity-70 w-full min-h-full duration-500 p-4">
          <div className="ms-auto my-5">
            <button
              onClick={closeDrawer}
              className="btn btn-circle bg-transparent border-transparent text-white shadow-none"
            >
              <IoMdClose size={30} />
            </button>
          </div>
          {navOptions}
        </ul>
      </div>
    </div>
  );
};

export default Menubar;

/* 
<div className="sticky top-0 z-10  ">
      <div className="navbar items-center bg-neutral-900  text-white max-w-[1200px] mx-auto ">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden md:hidden"
          />
          <NavbarBrand>
            <p className="   text-white  lg:text-lg text-md">
              <span className="cinzel-bold">BISTRO BOSS</span>
              <br />
              <span
                className="cinzel-light
"
              >
                RESTUARANT
              </span>
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden lg:flex md:flex gap-4"
          justify="center"
        >
          {navOptions}
        </NavbarContent>

        <NavbarContent
          justify="end"
          className="items-center lg:space-x-5 md:space-x-5 sm:space-x-10"
        >
          {viewCartButton}
          {user?.email ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform "
                  name={user.displayName}
                  size="sm"
                  src={user?.photoURL}
                />
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Profile Actions"
                variant="flat"
                className="bg-white text-black max-w-56 "
              >
                <DropdownItem
                  key="profile"
                  className="h-14 gap-2 cursor-default"
                >
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user.displayName}</p>
                </DropdownItem>
                <DropdownItem>
                  <Link>Your Account</Link>
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  <span
                    onClick={handleLogOut}
                    className="hover:text-orange-600"
                  >
                    {" "}
                    LogOut
                  </span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem>
              <Link to="/login">
                <button className="btn lg:btn-md md:btn-sm btn-xs btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white rounded-none">
                  Login
                </button>
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>
        <NavbarMenu className="bg-black bg-opacity-70 max-w-48">
          {navOptions}
        </NavbarMenu>
      </div>
    </div> */
