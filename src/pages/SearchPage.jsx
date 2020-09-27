import React, { useState } from 'react';

import Card from '../components/PlanetCard';
import { search } from '../api/api';

const SearchPage = () => {
  const [planets, setPlanets] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const onChangeHandler = async (e) => {
    search(e.target.value, setLoading, setPlanets);
    setValue(e.target.value);
  };

  return (
    <div className="search_container">
      <div className="search_input_container">
        <input
          value={value}
          onChange={(e) => onChangeHandler(e)}
          placeholder="Search Star Wars"
        />
      </div>
      <div className="search_results_container">
        {(value === '' || (planets && planets.length === 0)) && (
          <h1>There are no planets.</h1>
        )}
        {loading && <h1>Loading...</h1>}
        {planets && (
          <>
            {planets.map((planet) => (
              <Card data={planet} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
