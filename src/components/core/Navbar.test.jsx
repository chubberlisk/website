import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { useFlagBag } from "@happykit/flags/context";

jest.mock("@happykit/flags/context");

describe("when enable blog feature flag is on", () => {
  beforeAll(() => {
    useFlagBag.mockReturnValue({
      flags: { enableBlog: true },
    });
  });

  it("displays the link to blog", () => {
    render(<Navbar />);

    expect(screen.getByText("Blog")).toBeVisible();
    expect(screen.getByText("Blog")).toHaveAttribute("href", "/blog");
  });
});

describe("when enable blog feature flag is off", () => {
  beforeAll(() => {
    useFlagBag.mockReturnValue({
      flags: { enableBlog: false },
    });
  });

  it("does not display latest blog posts", () => {
    render(<Navbar />);

    expect(screen.queryByText("Blog")).not.toBeInTheDocument();
  });
});
