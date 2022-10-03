const ungroupedArr = [
  {
    id: "1",
    param: "a",
  },
  {
    id: "2",
    param: "a",
  },
  {
    id: "3",
    param: "a",
  },
  {
    id: "4",
    param: "b",
  },
  {
    id: "5",
    param: "c",
  },
  {
    id: "6",
    param: "c",
  },
  {
    id: "7",
    param: "e",
  },
  {
    id: "8",
    param: "E",
  },
];

const groupedObj = {
  a: [
    {
      id: "1",
      param: "a",
    },
    {
      id: "2",
      param: "a",
    },
    {
      id: "3",
      param: "a",
    },
  ],
  b: [
    {
      id: "4",
      param: "b",
    },
  ],
  c: [
    {
      id: "5",
      param: "c",
    },
    {
      id: "6",
      param: "c",
    },
  ],
  e: [
    {
      id: "7",
      param: "e",
    },
  ],
  E: [
    {
      id: "8",
      param: "E",
    },
  ],
};

const ungroupedIncosistentArr = [
  {
    id: 1,
    param: "a",
  },
  {
    id: 2,
    notTheParam: "a",
  },
  {
    id: 3,
    notTheParam: "b",
  },
];

const groupedInconsistentObj = {
  a: [
    {
      id: 1,
      param: "a",
    },
  ],
  undefined: [
    {
      id: 2,
      notTheParam: "a",
    },
    {
      id: 3,
      notTheParam: "b",
    },
  ],
};

const groupedInconsistentObjWithDefaultValue = {
  a: [
    {
      id: 1,
      param: "a",
    },
  ],
  defaultvalueXD: [
    {
      id: 2,
      notTheParam: "a",
    },
    {
      id: 3,
      notTheParam: "b",
    },
  ],
};

const unsortedDateObjArr = [
  {
    dateField: "Wed Sep 28 2022",
  },
  {
    dateField: new Date("Wed Sep 20 2022"),
  },
  {
    dateField: 50,
  },
];

const sortedDateObjArr = [
  {
    dateField: 50,
  },
  {
    dateField: new Date("Wed Sep 20 2022"),
  },
  {
    dateField: "Wed Sep 28 2022",
  },
];

module.exports = {
  groupedObj,
  ungroupedArr,
  ungroupedIncosistentArr,
  groupedInconsistentObj,
  groupedInconsistentObjWithDefaultValue,
  // sort by date
  unsortedDateObjArr,
  sortedDateObjArr,
};
