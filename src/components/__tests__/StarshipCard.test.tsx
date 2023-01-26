import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import type { Starship } from "../../queries/useStarships";

import StarshipCard from "../StarshipCard";

describe("StarshipCard", async () => {
  const starship: Starship = {
    name: "testName",
    model: "testModel",
    starship_class: "testClass",
    manufacturer: "testManufacturer",
    cost_in_credits: "testCost",
    length: "testLength",
    crew: "testCrew",
    passengers: "testPassengers",
    max_atmosphering_speed: "testSpeed",
    hyperdrive_rating: "testRating",
    MGLT: "testMGLT",
    cargo_capacity: "testCapacity",
    consumables: "testConsumables",
  };

  it("renders properly", () => {
    render(<StarshipCard starship={starship} />);

    expect(screen.getAllByRole("heading"));
  });
  it("shows all the data about starship", () => {
    render(<StarshipCard starship={starship} />);

    expect(screen.getByText(/testName/i));
    expect(screen.getByText(/testModel/i));
    expect(screen.getByText(/testClass/i));
    expect(screen.getByText(/testManufacturer/i));
    expect(screen.getByText(/testCost/i));
    expect(screen.getByText(/testLength/i));
    expect(screen.getByText(/testCrew/i));
    expect(screen.getByText(/testPassengers/i));
    expect(screen.getByText(/testSpeed/i));
    expect(screen.getByText(/testSpeed/i));
    expect(screen.getByText(/testRating/i));
    expect(screen.getByText(/testMGLT/i));
    expect(screen.getByText(/testCapacity/i));
    expect(screen.getByText(/testConsumables/i));
  });
});
