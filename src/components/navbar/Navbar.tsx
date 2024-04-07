"use client";
import Links from "./links/Links";
import Image from "next/image";
import { IonIcon } from "@ionic/react";
import { close, menu, cartOutline, person } from "ionicons/icons";
import NavLink from "./links/navLink/navLink";
import Link from "next/link";
import { useState } from "react";
import Cart from "../cart/Cart";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const pathName = usePathname();

  // TO BE UPDATED WITH STATE LATER
  const total = 0;
  const showCart = false;
  // Checks if the user is authenticated
  const session = false;
  // Checks if the user is admin
  const isAdmin = false;

  return (
    <header className="sm:px-3 lg:px-0 mx-auto relative z-10">
      <div className="wrapper max-w-xl lg:max-w-7xl relative flex h-16 px-5 py-4 items-center justify-between lg:h-28 mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-2 lg:px-1 xl:px-3 2xl:px-1 lg:py-0 lg:border-b border-grayish-blue">
        <div className="left flex items-center lg:h-inherit">
          <div
            onClick={toggleMenu}
            className="menu w-4 lg:hidden z-40 cursor-pointer"
          >
            {/* <img ref={hamburger} src={menu} alt="menu-icon" /> */}
            <IonIcon icon={menu} />
            <div
              // ref={close}
              className="close hidden text-xl leading-none fixed -mt-3 -ml-1 w-4"
            >
              {/* <ion-icon name="close-outline"></ion-icon> */}
              <IonIcon icon={close} />
            </div>
          </div>
          <Link
            href="/"
            className="logo mx-4 -mt-1 lg:m-auto lg:w-[138px] z-50"
          >
            <Image src="/logo.svg" alt="sneaker logo" width={138} height={20} />
          </Link>
          <Links />
          <div
            // ref={darkScreen}
            className="screen -z-20 fixed inset-0 opacity-0 bg-black h-screen hidden lg:!hidden transition-all"
            // onClick={displayMenu}
          ></div>
        </div>
        <Cart />
        <div className="right">
          <div className="user-bar flex items-center">
            <div className="cart-container">
              <div className="cart-wrapper mx-0 sm:mx-3 lg:mx-8 lg:mt-2 relative">
                {total > 0 && (
                  <div className="quantity-wrapper absolute px-2 rounded-full bg-orange z-10 -right-1/3 lg:-right-1/2 -top-2">
                    <div className="amount text-white text-xs">{total}</div>
                  </div>
                )}
                <i
                  // onClick={() => dispatch(cartDisplay(!showCart))}
                  className={
                    "cart cursor-pointer text-3xl !leading-none lg:text-2xl transition-colors " +
                    (showCart ? "text-very-dark-blue" : "text-grayish-blue")
                  }
                >
                  <IonIcon icon={cartOutline} />
                </i>
              </div>
            </div>
            {/* <div className="user h-6 w-6 mx-2 sm:h-8 sm:w-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hidden">
              <img src={avatar} alt="avatar" />
            </div> */}
            <ul className="flex">
              {session ? (
                <>
                  {isAdmin ? (
                    <li className="relative h-12 lg:h-inherit">
                      {/* <NavLink item={{ title: "Admin", path: "/admin" }} /> */}
                      <Link href={"/admin"}>Admin</Link>
                    </li>
                  ) : (
                    <li className="relative h-12 lg:h-inherit">
                      <Link href={"/user-profile"}>
                        <i
                          className={
                            "cursor-pointer text-2xl !leading-none lg:text-xl transition-colors hover:text-very-dark-blue flex" +
                            (pathName === "/user-profile"
                              ? " text-very-dark-blue"
                              : " text-grayish-blue")
                          }
                        >
                          <IonIcon icon={person} />
                        </i>
                      </Link>
                    </li>
                  )}
                </>
              ) : (
                <li>
                  <Link href="/login">
                    <button className="h-10 w-full hidden sm:block bg-orange px-4 rounded-lg lg:rounded-xl text-white items-center justify-center hover:bg-white shadow-[inset_0_0_0_0_rgba(255,125,26,0.6)] hover:shadow-[inset_0_-4rem_0_0_rgba(255,125,26,0.6)] transition-all duration-300">
                      Login
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
