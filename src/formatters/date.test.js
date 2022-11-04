import { formatDate } from "./date";

it("formats a date like 1 March 2021", () => {
  expect(formatDate("2021-03-01")).toBe("1 March 2021");
});

it("returns null if invalid date", () => {
  expect(formatDate("2021-24-01")).toBeNull();
});
