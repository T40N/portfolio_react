const MenuListItem = ({ src, name }) => {
  return (
    <li className="text-lg text-slate-500 hover:text-slate-700 font-semibold">
      <a href={src}>{name}</a>
    </li>
  );
};

export default MenuListItem;
