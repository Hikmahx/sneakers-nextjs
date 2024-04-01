"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type itemProps = {
  item: {
    title: string;
    path: string;
  };
};

const NavLink = ({ item }: itemProps) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      key={item.title}
      className={`absolute inset-0 mb-5 pt-[2.5px] lg:pt-0 lg:mb-0 lg:mx-4 lg:h-inherit lg:flex lg:items-center cursor-pointer lg:relative lg:before:content-[attr(before)] before:absolute before:-bottom-1 before:left-0 before:h-full before:-z-10 before:lg:z-10 before:lg:h-1 before:bg-orange before:w-0 hover:before:w-full before:transition-all lg:hover:text-very-dark-blue ${
        pathName == item.path &&
        "before:w-full text-white lg:text-very-dark-blue"
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
