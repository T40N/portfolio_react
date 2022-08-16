import React from "react";
import "./MenuList.css";
import "animate.css";
import MenuListItemDisplay from "./MenuListItemDisplay";

function MenuList({ isOpen, isFirstOpen }) {
  if (isFirstOpen) {
    return <></>;
  }

  const animation = isOpen ? "animate__fadeIn" : "animate__fadeOut";

  return (
    <>
      <div className={smallDiv + " " + animation}></div>
      <div className={bigDiv + " " + animation}>
        <MenuListItemDisplay />
      </div>
    </>
  );
}

const smallDiv = `
  animate__animated
  absolute
  z-0
  border-solid
  border-2
  border-slate-500
  w-8
  h-2
  centerItem
  top-11
`;

const bigDiv = `
  nimate__animated
  absolute
  w-36
  h-48
  border-solid
  border-slate-500
  border-2
  rounded-sm
  centerItem
  z-10
  bg-slate-100
  top-14
  flex
  flex-col
  items-center
  justify-center
`;

export default MenuList;
