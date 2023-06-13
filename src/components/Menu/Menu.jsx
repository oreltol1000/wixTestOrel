import "./Menu.css";
import DynamicMenu from "../DynamicMenu/DynamicMenu";
import { useMenuContext } from "../../context/Menu.context";

const Menu = () => {
  const { menuData, setMenuData } = useMenuContext();
  return (
    <div>
      <h1>Menu</h1>
      {menuData?.length > 0 && (
        <DynamicMenu menuData={menuData} setMenuData={setMenuData} />
      )}
    </div>
  );
};

export default Menu;
