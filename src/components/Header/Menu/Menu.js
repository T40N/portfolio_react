import { useState } from "react";
import MenuButton from "./MenuButton/MenuButton";
import MenuList from "./MenuList.js/MenuList";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  const onClickHandler = () => {
    setIsOpen((prevState) => {
      return !prevState;
    });
    setIsFirstOpen(false);
  };

  return (
    <div className="relative">
      <MenuButton
        onClick={onClickHandler}
        isFirstOpen={isFirstOpen}
        isOpen={isOpen}
      />
      <MenuList isOpen={isOpen} isFirstOpen={isFirstOpen} />
    </div>
  );
};

export default Menu;
