import React from "react";
import { Starship } from "../queries/useStarships";

interface Props {
  starship: Starship;
}

function StarshipCard({ starship }: Props) {
  return (
    <li data-testid="card" className="card card-shape h-full flex flex-col">
      <div>
        <h2 className="text-2xl card-text-important">{starship.name}</h2>
        <p>model: {starship.model}</p>
        <p>class: {starship.starship_class}</p>
        <p>manufacturer: {starship.manufacturer}</p>
      </div>
      <div className="my-5">
        <h3 className="card-text-important">data:</h3>
        <p>length: {starship.length}</p>
        <p>max atmosphering speed: {starship.max_atmosphering_speed}</p>
        <p>crew: {starship.crew}</p>
        <p>passengers: {starship.passengers}</p>
        <p>cargo_capacity: {starship.cargo_capacity}</p>
        <p>consumables: {starship.consumables}</p>
        <p>hyperdrive rating: {starship.hyperdrive_rating}</p>
        <p>MGLT: {starship.MGLT}</p>
      </div>
      <p className="mt-auto card-text-important">
        cost (credits): {starship.cost_in_credits}
      </p>
    </li>
  );
}

export default StarshipCard;
