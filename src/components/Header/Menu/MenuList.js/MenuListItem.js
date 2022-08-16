const MenuListItem = ({ src, name }) => {
  return (
    <li className={styles}>
      <a href={src}>{name}</a>
    </li>
  );
};

const styles = `
  text-lg
  text-slate-500
  hover:text-slate-700
  font-semibold
`;

export default MenuListItem;
