import React from 'react';
import PropTypes from 'prop-types';
import MovieEntry from './MovieEntry';


const MainContent = props =>
<main>
  <div className="topTenList">
    <ul>
      {props.films
      // .filter(guest => !props.isFiltered || guest.isConfirmed)
      .map((film, index) =>
      <MovieEntry
        index={index}
        filmID={film.filmID}
        name={film.title}
        year={film.year}
        comment={film.comment}
        removeMovieEntry={() => props.removeMovieEntry(film.filmID)}
        moveMovieEntryUp={() => props.moveMovieEntryUp(film.filmID, index)}
        moveMovieEntryDown={() => props.moveMovieEntryDown(film.filmID, index)}
       />
    )}
    </ul>
  </div>
</main>

MainContent.propTypes = {
  films: PropTypes.array.isRequired,
  removeMovieEntry: PropTypes.func.isRequired,
  moveMovieEntryUp: PropTypes.func.isRequired,
  moveMovieEntryDown: PropTypes.func.isRequired,
}

export default MainContent;
