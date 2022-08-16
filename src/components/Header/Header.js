import React from "react";
import Logo from "./Logo";
import Menu from "./Menu/Menu";

const Header = () => {
  return (
    <header className={styles}>
      <Logo />
      <Menu />
    </header>
  );
};

const styles = `
  absolute
  top-0
  w-full
  h-16
  flex
  justify-around
  items-center
  bg-slate-100
`;

export default Header;
