import { useContext, useEffect, useState, createContext } from "react";
import { getMenuData } from "../services/menuService";

export const MenuContext = createContext({
  menuData: [],
  setMenuData: () => {},
  addItem: () => {},
});

export const useMenuContext = () => useContext(MenuContext);

const MenuProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const stored = getMenuData();

    setMenuData(stored);
  }, []);

  return (
    <MenuContext.Provider value={{ menuData, setMenuData }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
