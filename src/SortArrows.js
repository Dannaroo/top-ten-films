import React from 'react';
import PropTypes from 'prop-types';


const SortArrows = props =>
<div>
  {props.upArrow ?
  <button lassName="up" onClick={() => props.moveMovieEntryUp(props.order)}>{String.fromCharCode(8593)}</button>
  :
  <button className="up disabled">{String.fromCharCode(8593)}</button>
  }
  {props.downArrow ?
  <button className="down" onClick={() => props.moveMovieEntryDown(props.order)}>{String.fromCharCode(8595)}</button>
  :
  <button className="down disabled">{String.fromCharCode(8595)}</button>
  }
</div>


SortArrows.propTypes = {
  moveMovieEntryUp: PropTypes.func.isRequired,
  moveMovieEntryDown: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired,
  upArrow: PropTypes.bool.isRequired,
  downArrow: PropTypes.bool.isRequired,
}

export default SortArrows;
