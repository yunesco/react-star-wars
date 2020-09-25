import React from 'react';
import LinkButton from './LinkButton';

const PlanetCard = ({ data }) => (
  <div className="card_container">
    <div className="card_content">
      <h2>{data.name}</h2>
      <div>Diameter: {data.diameter}</div>
      <div>Population: {data.population}</div>
      <div>Climate: {data.climate}</div>
      <div>
        <LinkButton
          to={{
            pathname: `/planet/${data.name}`,
            state: data,
          }}
        >
          Details
        </LinkButton>
      </div>
    </div>
  </div>
);

export default PlanetCard;
