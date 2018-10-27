import React from 'react';
import PropTypes from 'prop-types';

const Header = props =>
<header>
  <h1 id="myHeading">Top Ten Films</h1>
  <p>Make a list of your top ten favourite films.</p>
  <button id="toggleNewMovieForm" onClick={props.toggleAddMovie}>{props.shouldHideForm === true ? "Add New Movie" : "Hide"}</button>
  <form
    className="newMovieForm"
    className={props.shouldHideForm ? 'hidden' : ''}
    onSubmit={props.submitPendingFilm}>
    <p className="description">Enter details of the movie you want to add to the top ten list:</p>
    <span>Movie Title:</span>
    <input
      type="text"
      id="title"
      value={props.pendingTitle}
      onChange={e => props.inputPendingField('pendingTitle', e.target.value)}
    /><br />
    <span>Year of Release:</span>
    <input
      type="number"
      id="year"
      value={props.pendingYear}
      onChange={e => props.inputPendingField('pendingYear', e.target.value)}
    /><br />
    <span>Comment:</span>
    <input
      type="textarea"
      id="comment"
      value={props.pendingComment}
      onChange={e => props.inputPendingField('pendingComment', e.target.value)}
    /><br />
    <button type='submit' className="submit">Submit</button>
  </form>
</header>

Header.propTypes = {
  toggleAddMovie: PropTypes.func.isRequired,
  shouldHideForm: PropTypes.bool.isRequired,
  submitPendingFilm: PropTypes.func.isRequired,
  pendingTitle: PropTypes.string.isRequired,
  pendingYear: PropTypes.string.isRequired,
  pendingComment: PropTypes.string.isRequired,
  inputPendingField: PropTypes.func.isRequired,
};

export default Header;
