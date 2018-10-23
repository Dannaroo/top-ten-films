import React from 'react';
import PropTypes from 'prop-types';


const MovieEntry = props =>
  <li>
    <h4 className="numbers">{props.index + 1}</h4>
    <button className="up" onClick={() => props.moveMovieEntryUp(props.order)}>Up</button>
    <button className="down" onClick={() => props.moveMovieEntryDown(props.order)}>Down</button>
    <h3>{props.name}</h3>
    <span>{props.year}</span>
    <p>{props.comment}</p>
    <button className="remove" onClick={() => props.removeMovieEntry(props.filmID)}>Remove</button>
  </li>

MovieEntry.propTypes = {
  index: PropTypes.number.isRequired,
  filmID: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  removeMovieEntry: PropTypes.func.isRequired,
  moveMovieEntryUp: PropTypes.func.isRequired,
  moveMovieEntryDown: PropTypes.func.isRequired,
}

export default MovieEntry;
