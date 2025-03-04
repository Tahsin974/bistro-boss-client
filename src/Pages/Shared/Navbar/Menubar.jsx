import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../../../Hooks/useAuthContext";
import useCart from "../../../Hooks/useCart";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@heroui/react";
import useAdmin from "../../../Hooks/useAdmin";

const Menubar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <NavbarItem>
        <Link to="/dashboard/cart">
          <div className="indicator">
            <FaShoppingCart className="text-2xl text-green-400 cursor-pointer" />
            <span className="badge badge-sm indicator-item bg-red-600 border-red-600 text-white">
              {cart.length}
            </span>
          </div>
        </Link>
      </NavbarItem>
    </>
  );
  const navOptions = (
    <>
      <NavbarItem>
        <Link to="/" className="text-white font-light hover:text-orange-500">
          HOME
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
          to="/contact"
          className="text-white font-light hover:text-orange-500"
        >
          CONTACT US
        </Link>
      </NavbarItem>
      {user?.email && (
        <NavbarItem>
          <Link
            to={isAdmin ? "/dashboard/admin-home" : "/dashboard/user-home"}
            className="text-white font-light hover:text-orange-500"
          >
            DASHBOARD
          </Link>
        </NavbarItem>
      )}
      <NavbarItem>
        <Link
          to="/menu"
          className="text-white font-light hover:text-orange-500"
        >
          OUR MENU
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
          to="/order/salads"
          className="text-white font-light hover:text-orange-500"
        >
          ORDER FOOD
        </Link>
      </NavbarItem>
    </>
  );
  console.log(isAdmin);
  return (
    <div className="sticky top-0 z-10  ">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="items-center bg-neutral-900  text-white max-w-[1200px] mx-auto "
      >
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
      </Navbar>
    </div>
  );
};

export default Menubar;
