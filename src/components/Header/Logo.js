import React from "react";

const Logo = (props) => {
  return <h1 className={styles}>Bartosz Ratajczyk</h1>;
};

const styles = `
  text-slate-500
  text-xl
  font-semibold
  cursor-pointer
  hover:text-slate-700
`;

export default Logo;
