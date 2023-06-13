import "./MenuOptions.css";
import { generateId, updateMenuData } from "../../services/menuService";

import { useMenuContext } from "../../context/Menu.context";
import { useState } from "react";

const buildNewData = (arr, fatherId, newValue) => {
  return arr.map((item) => {
    if (item?.id === fatherId) {
      return {
        ...item,
        children: [
          ...item.children,
          { id: generateId(), name: newValue, children: [] },
        ],
      };
    }
    if (item.children.length > 0) {
      return {
        ...item,
        children: buildNewData(item.children, fatherId, newValue),
      };
    }
    return item;
  });
};

//deep remove object from array same as before but remove instead of add

const MenuOptions = ({ item, setEditItem }) => {
  const { menuData, setMenuData } = useMenuContext();

  const [addOpen, setAddOpen] = useState(false);
  const [inputAdd, setInputAdd] = useState(null);
  const [deleteItem, setDeleteItem] = useState(false);
  const addHandler = () => {};

  const saveHandler = () => {
    if (inputAdd !== null) {
      setMenuData((prev) => {
        console.log("input", inputAdd);
        const newData = buildNewData(prev, item.id, inputAdd);
        updateMenuData(newData);
        return newData;
      });
    }
    if (deleteItem) {
    }
  };

  return (
    <div className="option-menu-container">
      <div className="close-button" onClick={() => setEditItem(null)}>
        X
      </div>
      <h2>{item.name}</h2>

      <div className="flex">
        <label
          htmlFor="add-item"
          onClick={() => {
            setAddOpen(true);
          }}
        >
          add
        </label>
        {addOpen && (
          <input
            type="text"
            id="add-item"
            onChange={(e) => setInputAdd(e.target.value)}
          />
        )}
      </div>

      <h3>rename</h3>
      <h3 onClick={() => setDeleteItem(true)}>delete</h3>
      <button onClick={() => saveHandler()}>save</button>
    </div>
  );
};

export default MenuOptions;
