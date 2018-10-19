import React from 'react';
import PropTypes from 'prop-types';


const MovieEntry = props =>
  <li>
    <h4 className="numbers">{props.index + 1}</h4>
    <button className="up" onClick={() => props.moveMovieEntryUp(props.filmID, props.index)}>&#x02191</button>
    <button className="down" onClick={() => props.moveMovieEntryDown(props.filmID, props.index)}>&#x02193</button>
    <h3>{props.name}</h3>
    <span>{props.year}</span>
    <p>{props.comment}</p>
    <button className="remove" onClick={() => props.removeMovieEntry(props.filmID)}>&#x02298</button>
  </li>

MovieEntry.propTypes = {
  index: PropTypes.number.isRequired,
  filmID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  removeMovieEntry: PropTypes.func.isRequired,
  moveMovieEntryUp: PropTypes.func.isRequired,
  moveMovieEntryDown: PropTypes.func.isRequired,
}

export default MovieEntry;
