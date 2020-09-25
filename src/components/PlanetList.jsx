import React from 'react';
import PlanetCard from './PlanetCard';

const PlanetList = ({ loading, data }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="home_cards_list_container">
      {data &&
        data.map((planet) => <PlanetCard key={planet.name} data={planet} />)}
    </div>
  );
};

export default PlanetList;
