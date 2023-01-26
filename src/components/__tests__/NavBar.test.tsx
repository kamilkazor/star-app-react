import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { HashRouter } from "react-router-dom";

import Navbar from "../Navbar";

describe("NavBar", () => {
  it("renders properly", () => {
    render(<Navbar />, { wrapper: HashRouter });

    expect(screen.getByText(/home/i));
    expect(screen.getByText(/starships/i));
    expect(screen.getByText(/tasks/i));
  });
});
