const DEFAULT_VALUE = [
  {
    id: 1,
    name: "Menu",
    children: [],
  },
];

export const getMenuData = () => {
  const stored = localStorage.getItem("menuData") || null;

  if (stored) {
    return JSON.parse(stored);
  }

  return DEFAULT_VALUE;
};

export const updateMenuData = (data) => {
  console.log("save", data);
  if (JSON.stringify(getMenuData()) !== JSON.stringify(data)) {
    localStorage.setItem("menuData", JSON.stringify(data));
  }
};

export const generateId = () => {
  let lastSeqNumber = localStorage.getItem("sequenceNumber") || 0;
  let newSec = Number(lastSeqNumber) + 1;
  localStorage.setItem("sequenceNumber", lastSeqNumber + 1);
  return newSec;
};
