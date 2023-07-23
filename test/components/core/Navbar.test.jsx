import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "@/components/core/Navbar";

it("displays the link to blog", () => {
  render(<Navbar />);

  expect(screen.getByText("Blog")).toBeVisible();
  expect(screen.getByText("Blog")).toHaveAttribute("href", "/blog");
});
