import Link from "next/link";
import NavLink from "./navLink/navLink";

const Links = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const links = [
    {
      title: "Collections",
      path: "/collections",
    },
    {
      title: "Men",
      path: "/men",
    },
    {
      title: "Women",
      path: "/women",
    },
    {
      title: "All",
      path: "/all",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  // Checks if the user is authenticated
  const session = false;

  return (
    <nav
      className={
        "menu fixed inset-0 right-1/3 bg-white pt-20 z-30 h-screen px-7 transition-all ease-in-out duration-500 lg:translate-x-0 lg:relative lg:w-max lg:p-0 lg:h-inherit lg:flex lg:items-center" +
        (isMenuOpen ? " !translate-x-0" : " -translate-x-full")
      }
    >
      <ul className="font-bold lg:font-normal text-center lg:text-left lg:flex lg:items-center text-lg lg:text-base pt-2 lg:p-0 lg:mx-9 lg:text-dark-grayish-blue lg:h-inherit">
        {links.map((link) => (
          <li className="relative h-12 lg:h-inherit" key={link.title}>
            <NavLink item={link} />
          </li>
        ))}
      </ul>
      {!session && (
        <ul className="">
          <li>
            <Link
              href="/login"
              className="h-10 w-full sm:hidden bg-orange px-4 rounded-lg lg:rounded-xl text-white flex items-center justify-center hover:bg-white shadow-[inset_0_0_0_0_rgba(255,125,26,0.6)] hover:shadow-[inset_0_-4rem_0_0_rgba(255,125,26,0.6)] transition-all duration-300"
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Links;
