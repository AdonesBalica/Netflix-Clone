import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import consumTmdbApi from './consumTmdbApi';
import './App.css';
import Header from './components/Header';
import FeatureMovie from './components/FeatureMovie';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureMovie, setFetureMovie] = useState(null);
  const [classBlack, setClassBlack] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const dadas = await consumTmdbApi.getHomeList();
      setMovieList(dadas);

      // randon movie destaque
      const originals = dadas.filter((i) => i.slug === 'originals');
      let randonChoise = await Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randonChoise];
      let chosenInfo = await consumTmdbApi.getMovieInfo(chosen.id, 'tv');
      setFetureMovie(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setClassBlack(true);
      } else {
        setClassBlack(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="App">
      <Header black={classBlack} />

      {featureMovie && <FeatureMovie feature={featureMovie} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key} />
        ))}
      </section>
    </div>
  );
}

export default App;
