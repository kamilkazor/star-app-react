import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import StarshipCardSceleton from "../StarshipCardSceleton";

describe("StarshipCardSceleton", async () => {
  it("renders properly", () => {
    render(<StarshipCardSceleton />);

    expect(screen.getAllByRole("heading"));
  });
});
