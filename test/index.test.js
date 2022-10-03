const { groupBy, sortByDate } = require("..");
const {
  groupedObj,
  ungroupedArr,
  ungroupedIncosistentArr,
  groupedInconsistentObj,
  groupedInconsistentObjWithDefaultValue,
  unsortedDateObjArr,
  sortedDateObjArr,
} = require("./testData");

describe("group by tests", () => {
  const testGrouping = (ungrouped, grouped, defaultValue) => {
    const res = groupBy(ungrouped, "param", defaultValue);
    expect(res).toEqual(grouped);
  };

  test("works for simplest case", () => {
    testGrouping(ungroupedArr, groupedObj);
  });

  test("works for inconsistent data", () => {
    testGrouping(ungroupedIncosistentArr, groupedInconsistentObj);
  });

  test("works for inconsistent data for default value", () => {
    testGrouping(
      ungroupedIncosistentArr,
      groupedInconsistentObjWithDefaultValue,
      "defaultvalueXD"
    );
  });
});

describe("sort by date", () => {
  test("works for simplest case", () => {
    const val = sortByDate(unsortedDateObjArr, "dateField");
    expect(val).toEqual(sortedDateObjArr);
  });

  const testError = (arr, errorText) => {
    const fn = jest.fn();

    try {
      sortByDate(arr, "dateField");
    } catch(e) {
      fn(e);
    }

    expect(fn).toHaveBeenCalledWith(errorText);
  };

  test("throws an error if field is not present", () => {
    testError(
      [...unsortedDateObjArr, { anotherField: null }],
      "The specified field is not present in every item"
    );
  });

  test("throws an error if field is not parseable to a date", () => {
    testError(
      [...unsortedDateObjArr, { dateField: true }],
      "The specified field does not contain a date parseable value in every item"
    );
  });

  test('does not modify the original array', () => {
    const originalArr = [...unsortedDateObjArr]
    const originalArrCopy = [...originalArr]
    sortByDate(originalArr, "dateField");
    expect(originalArr).toEqual(originalArrCopy);
  })
});
