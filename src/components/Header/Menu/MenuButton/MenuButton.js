import React from "react";

function MenuButton({ isOpen, isFirstOpen, onClick }) {
  if (isFirstOpen) {
    return (
      <button
        className="group w-10 h-10 border-solid border-slate-500 hover:border-slate-700 border-2 rounded-sm flex flex-col justify-center items-center cursor-pointer gap-1"
        onClick={onClick}
      >
        <div
          className={`w-6 h-[4px] bg-slate-500 group-hover:bg-slate-700 rounded-sm `}
        ></div>
        <div
          className={`w-6 h-[4px] bg-slate-500 group-hover:bg-slate-700 rounded-sm `}
        ></div>
        <div
          className={`w-6 h-[4px] bg-slate-500 group-hover:bg-slate-700 rounded-sm `}
        ></div>
      </button>
    );
  }

  return (
    <button
      className="group w-10 h-10 border-solid border-slate-500 hover:border-slate-700 border-2 rounded-sm flex flex-col justify-center items-center cursor-pointer gap-1"
      onClick={onClick}
    >
      <div
        className={`w-6 h-[4px] bg-slate-500 group-hover:bg-slate-700 rounded-sm ${
          isOpen
            ? "animate-rotateDownMenuButton"
            : "animate-rotateDownResetMenuButton"
        }`}
      ></div>
      <div
        className={`w-6 h-[4px] bg-slate-500 group-hover:bg-slate-700 rounded-sm ${
          isOpen && !isFirstOpen ? "animate-hideMiddleBarMenuButton" : ""
        }`}
      ></div>
      <div
        className={`w-6 h-[4px] bg-slate-500 group-hover:bg-slate-700 rounded-sm ${
          isOpen & !isFirstOpen
            ? "animate-rotateUpMenuButton"
            : "animate-rotateUpResetMenuButton"
        }`}
      ></div>
    </button>
  );
}

export default MenuButton;
