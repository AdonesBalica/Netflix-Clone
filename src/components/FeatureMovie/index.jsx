import React from 'react';
import P from 'prop-types';
import './styles.css';

function FeatureMovie({ feature }) {
  let date = new Date(feature.first_air_date);
  let genres = [];

  for (let i in feature.genres) {
    genres.push(feature.genres[i].name);
  }

  let description = feature.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${feature.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{feature.original_name}</div>
          <div className="feaured--info">
            <div className="featured--points">{feature.vote_average}</div>
            <div className="featured--year">{date.getFullYear()}</div>
            <div className="featured--seansons">
              {feature.number_of_seasons} Temporada{feature.number_of_seasons > 1 ? 's' : ''}
            </div>
            <div className="featured--description">{description}</div>
            <div className="featured--buttons">
              <a href={`/watch/${feature.id}`} className="featured--watchbutton">
                ▷ Assitir
              </a>
              <a href={`/list/add/${feature.id}`} className="featured--mylistbutton">
                + Minha Lista
              </a>
              <div className="featured--genres">{genres.join(', ')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeatureMovie.propTypes = {
  feature: P.shape({
    original_name: P.string,
    vote_average: P.number,
    first_air_date: P.string,
    number_of_seasons: P.number,
    overview: P.string,
    id: P.number,
    genres: P.array,
    backdrop_path: P.string,
  }),
};

export default FeatureMovie;
