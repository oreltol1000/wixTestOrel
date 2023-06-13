import "./DynamicMenu.css";
import { useEffect, useMemo, useState } from "react";
import MenuOptions from "../MenuOptions/MenuOptions";
import { useMenuContext } from "../../context/Menu.context";

const DynamicMenu = ({ menuData, setMenuData }) => {
  // const { menuData, setMenuData } = useMenuContext();

  const [selctedRow, setSelectedRow] = useState(null);
  const [editItem, setEditItem] = useState(null);

  const formatedMenu = useMemo(() => {
    console.log("pppp", menuData);
    return menuData.map((item) => {
      return (
        <div
          className="menu-row"
          key={item.id}
          id={item.id}
          onClick={() => setSelectedRow(item)}
          onContextMenu={(e) => {
            e.preventDefault();
            setEditItem(item);
          }}
        >
          <span>{item.name}</span>
        </div>
      );
    });
  }, [menuData]);

  // const createMenu = (menuData) => {
  //   return menuData.map((item) => {
  //     return (
  //       <div
  //         className="menu-row"
  //         id={item.id}
  //         onClick={() => setSelectedRow(item || null)}
  //         onContextMenu={(e) => {
  //           e.preventDefault();
  //           setEditItem(item);
  //         }}
  //       >
  //         <span>{item.name}</span>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div className="menu-container">
      {formatedMenu}

      <div>
        {selctedRow?.children.length > 0 && (
          <DynamicMenu
            menuData={selctedRow.children}
            setMenuData={setMenuData}
          />
        )}
      </div>

      {editItem && <MenuOptions setEditItem={setEditItem} item={editItem} />}
    </div>
  );
};

export default DynamicMenu;
