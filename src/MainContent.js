import React from 'react';
import PropTypes from 'prop-types';
import MovieEntry from './MovieEntry';


const MainContent = props =>
<main>
  <div className="topTenList">
    <ul>
      {props.films.map((film, index) =>
      <MovieEntry
        index={index}

        order={film.order}
        filmID={film.filmID}
        name={film.title}
        year={film.year}
        comment={film.comment}
        upArrow={film.upArrow}
        downArrow={film.downArrow}
        removeMovieEntry={() => props.removeMovieEntry(film.filmID)}
        moveMovieEntryUp={() => props.moveMovieEntryUp(film.order)}
        moveMovieEntryDown={() => props.moveMovieEntryDown(film.order)}
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
