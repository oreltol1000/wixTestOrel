export const mockData = [
  // {
  //   id: 1,
  //   name: "menu",
  //   url: "/",
  //   children: [],
  // },
  {
    id: 2,
    name: "menu",

    children: [
      {
        id: 3,
        name: "About 1",
        url: "/about/1",
        children: [],
      },
      {
        id: 4,
        name: "About 4",
        url: "/about/4",
        children: [
          {
            id: 5,
            name: "About 5",
            url: "/about/5",
            children: [],
          },
          {
            id: 6,
            name: "About 6",
            url: "/about/6",
            children: [],
          },
        ],
      },
    ],
  },
];
