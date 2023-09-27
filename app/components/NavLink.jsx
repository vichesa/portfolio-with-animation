import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block pl-2 md:p-0 rounded sm:text-xl text-[#ADB7BE]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
