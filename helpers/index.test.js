const { math, date } = require("./index");

test("sum of 2+2 should be 4", () => {
  expect(math.sum(2, 2)).toBe(4);
});

test("testing if addDays is working propertly", () => {
  expect(date.format(date.addDays(new Date(), 1))).toBe("29/09/2022");
});
