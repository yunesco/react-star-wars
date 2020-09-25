import axios from 'axios';

import { avoidUnnecessarySearch } from './utils';

export const makeMultipleApiCalls = (links, saveResToState) => {
  axios.all(links.map((l) => axios.get(l))).then(
    axios.spread((...res) => {
      saveResToState(res);
    })
  );
};

export const getData = (apiUrl, setPageCount, setData, setLoading) => {
  axios
    .get(apiUrl)
    .then((response) => {
      setPageCount(response.data.count / 10);
      setData(response.data.results);
      setLoading(false);
    })
    .catch((error) => console.log(error));
};

export const search = async (val, setLoading, setPlanets) => {
  setLoading(true);
  const res = await avoidUnnecessarySearch(
    `https://swapi.dev/api/planets/?search=${val}`
  );
  const planets = (await res) ? res.results : '';
  setPlanets(planets);
  setLoading(false);
  if (val === '') {
    setPlanets([]);
  }
};
