import { navigationItems } from "../const/navbarList";

const NavBar = () => {
  return (
    <nav className="hidden sm:inline-flex list-none font-medium text-hci-lila">
      {navigationItems.map((item) => (
        <li
          key={item}
          className="w-36 py-4 font-normal text-2xl text-center text-purple-900 hover:text-white hover:bg-purple-900 cursor-pointer"
        >
          {item}
        </li>
      ))}
    </nav>
  );
};

export default NavBar;
