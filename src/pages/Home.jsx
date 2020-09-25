import React, { useState, useEffect } from 'react';
import { Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import PlanetList from '../components/PlanetList';
import { getData } from '../api/api';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [apiUrl, setApiUrl] = useState(
    `https://swapi.dev/api/planets/?page=${activePage}`
  );

  useEffect(() => {
    setLoading(true);
    getData(apiUrl, setPageCount, setData, setLoading);
  }, [apiUrl]);

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
    setApiUrl(`https://swapi.dev/api/planets/?page=${pageInfo.activePage}`);
  };

  return (
    <div className="home">
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div className="home">
          <h1>Planets</h1>
          <PlanetList data={data} />
          <div className="pagination">
            <Pagination
              activePage={activePage}
              onPageChange={onChange}
              totalPages={pageCount}
              ellipsisItem={null}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
