import React from "react";

function MenuButton({ isOpen, isFirstOpen, onClick }) {
  const animationTopPath = "";
  const animationMiddlePath = "";
  const animationBottomPath = "";

  if (isFirstOpen) {
    animationTopPath = isOpen
      ? "animate-rotateDownMenuButton"
      : "animate-rotateDownResetMenuButton";

    animationMiddlePath = isOpen
      ? "animate-hideMiddleBarMenuButton"
      : "animate-showMiddleBarMenuButton";

    animationBottomPath = isOpen
      ? "animate-rotateUpMenuButton"
      : "animate-rotateUpResetMenuButton";
  }

  return (
    <button className={buttonStyles} onClick={onClick}>
      <div className={buttonPathStyles + " " + animationTopPath}></div>
      <div className={buttonPathStyles + " " + animationMiddlePath}></div>
      <div className={buttonPathStyles + " " + animationBottomPath}></div>
    </button>
  );
}

const buttonStyles = `
  group 
  w-10 
  h-10 
  border-solid 
  border-slate-500 
  hover:border-slate-700 
  border-2 
  rounded-sm 
  flex 
  flex-col 
  justify-center 
  items-center 
  cursor-pointer 
  gap-1
`;

const buttonPathStyles = `
  w-6 
  h-[4px] 
  bg-slate-500 
  group-hover:bg-slate-700 
  rounded-sm 
`;

export default MenuButton;
