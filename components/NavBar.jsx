import Logo from "./Logo";
import NavContact from "./NavContact";

const NavBar = () => {
  return (
    <div className=" absolute w-full px-24  top-0 pt-4 z-100">
      <nav className="flex justify-between">
        <Logo />
        <NavContact />
      </nav>
    </div>
  );
};
export default NavBar;
