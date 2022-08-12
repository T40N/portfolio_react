import React from "react";
import Logo from "./Logo";
import Menu from "./Menu/Menu";

const Header = () => {
  return (
    <header className="absolute top-0 w-full h-16 flex justify-around items-center bg-slate-100">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
