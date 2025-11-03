import React, { use } from "react";
import { Link, NavLink } from "react-router";
import Container from "../Container/Container";
import { AuthContext } from "../../Contexts/AuthContext";
// import profileImage from "../../../public/react.svg";

const Header = () => {
  const guestNavigation = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/all-products", name: "All Products" },
  ];

  const signedInNavigation = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/all-products",
      name: "All Products",
    },
    {
      id: 3,
      path: "/my-products",
      name: "My Products",
    },
    {
      id: 4,
      path: "/my-bids",
      name: "My Bids",
    },
    {
      id: 5,
      path: "/create-product",
      name: "Create Product",
    },
  ];

  const { user, logOut } = use(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  const navigation = user ? signedInNavigation : guestNavigation;
  return (
    <header className="bg-white">
      <Container className="navbar py-6 px-0">
        {/* Dropdown Menu & Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost pl-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content gap-5 bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navigation.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className="p-0 font-semibold text-primary transition-colors duration-200 ease-linear hover:bg-transparent hover:text-accent"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to={"/"} className="text-3xl font-bold">
            Smart<span className="text-accent">Deals</span>
          </Link>
        </div>

        {/* Navigation Menus */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">
            {navigation.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className="p-0 font-semibold text-primary transition-colors duration-200 ease-linear hover:bg-transparent hover:text-accent"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* LoggedIn User Profile */}
        <div className="navbar-end gap-5">
          <img
            src={
              user
                ? user?.photoURL
                : "https://img.icons8.com/ios-filled/50/user-male-circle.png"
            }
            alt="It is loggedin user image"
            className="size-8 md:size-9 lg:size-11 border-2 border-accent rounded-full"
          />

          <div>
            {user ? (
              <Link
                onClick={handleSignOut}
                to={"/login"}
                className="btn text-white gradAccentClr gradAccentClrHover"
              >
                SignOut
              </Link>
            ) : (
              <Link
                to={"/login"}
                className="btn text-white gradAccentClr gradAccentClrHover"
              >
                SignIn
              </Link>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
