import { formatDate } from "./date";

it("formats a date", () => {
  expect(formatDate("2021-03-01")).toBe("1st March 2021");
});

it("returns null if unparsable date", () => {
  expect(formatDate("2021-24-01")).toBeNull();
});
