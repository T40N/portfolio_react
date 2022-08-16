import MenuListItem from "./MenuListItem";

const MENU_LINKS = [
  {
    src: "#",
    linkName: "About me",
  },
  {
    src: "#",
    linkName: "My projects",
  },
  {
    src: "#",
    linkName: "Contact me",
  },
];

const MenuListItemDisplay = () => {
  return (
    <ul className={styles}>
      {MENU_LINKS.map((link) => {
        return <MenuListItem src={link.src} name={link.linkName} />;
      })}
    </ul>
  );
};

const styles = `
  h-full
  flex
  flex-col
  items-center
  justify-center
  gap-4
`;

export default MenuListItemDisplay;
