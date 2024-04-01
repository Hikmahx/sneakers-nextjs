import Link from "next/link";
import NavLink from "./navLink/navLink";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
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
  return (
    <ul className="font-bold lg:font-normal text-center lg:text-left lg:flex lg:items-center text-lg lg:text-base pt-2 lg:p-0 lg:mx-9 lg:text-dark-grayish-blue lg:h-inherit">
      {links.map((link) => (
        <li className="relative h-12 lg:h-inherit">
          <NavLink item={link} key={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default Links;
