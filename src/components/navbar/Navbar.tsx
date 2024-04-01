import React from "react";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <header className="sm:px-3 lg:px-0 mx-auto relative z-10">
      <div className="wrapper max-w-xl lg:max-w-7xl relative flex h-16 px-5 py-4 items-center justify-between lg:h-28 mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-2 lg:px-1 xl:px-3 2xl:px-1 lg:py-0 lg:border-b border-grayish-blue">
        <div className="left flex items-center lg:h-inherit">
          <div
            // onClick={displayMenu}
            className="menu w-4 lg:hidden z-40 cursor-pointer"
          >
            {/* <img ref={hamburger} src={menu} alt="menu-icon" /> */}
            <div
              // ref={close}
              className="close hidden text-xl leading-none fixed -mt-3 -ml-1 w-4"
            >
              {/* <ion-icon name="close-outline"></ion-icon> */}
            </div>
          </div>
          <Links />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
