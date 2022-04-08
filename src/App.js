import React, { useEffect } from 'react';
import consumTmdbApi from './consumTmdbApi';

function App() {
  useEffect(() => {
    const loadAll = async () => {
      const dadas = await consumTmdbApi.getHomeList();
      console.log(dadas);
    };
    loadAll();
  }, []);

  return (
    <div>
      <h1>oi</h1>
    </div>
  );
}

export default App;
