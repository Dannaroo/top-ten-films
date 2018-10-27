import React from 'react';
import PropTypes from 'prop-types';
import SortArrows from './SortArrows';


const MovieEntry = props =>
  <li>
    <h4 className={props.getTopThree(props.index)}>{props.index + 1}</h4>
    <SortArrows
      moveMovieEntryUp= {props.moveMovieEntryUp}
      moveMovieEntryDown= {props.moveMovieEntryDown}
      order= {props.order}
      upArrow= {props.upArrow}
      downArrow= {props.downArrow}
    />
    <h3>{props.name}</h3>
    <span>{props.year}</span>
    <p>{props.comment}</p>
    <button className="remove" onClick={() => props.removeMovieEntry(props.filmID)}>{String.fromCharCode(8856)}</button>
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
  upArrow: PropTypes.bool.isRequired,
  downArrow: PropTypes.bool.isRequired,
  getTopThree: PropTypes.func.isRequired,
}

export default MovieEntry;
