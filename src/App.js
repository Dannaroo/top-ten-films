import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';

// declare a variable to use as a key for every film in the list. both to be -1 with empty films array.
let filmID = 4;
let order = 4;

class App extends Component {

  state = {
    shouldHideForm: true,
    pendingTitle: "",
    pendingYear: "",
    pendingComment: "",
    films: [
      {
        title: 1,
        year: 1,
        comment: 1,
        filmID: 0,
        order: 4
      },
      {
        title: 2,
        year: 2,
        comment: 2,
        filmID: 1,
        order: 3
      },
      {
        title: 3,
        year: 3,
        comment: 3,
        filmID: 2,
        order: 2
      },
      {
        title: 4,
        year: 4,
        comment: 4,
        filmID: 3,
        order: 1
      },
      {
        title: 5,
        year: 5,
        comment: 5,
        filmID: 4,
        order: 0
      },
    ],
  }

  // Toggle the Add Movie Button to hide or display the form to input new movies.
  toggleAddMovie = () =>
    this.setState({shouldHideForm: !this.state.shouldHideForm});

  // add the form title/year/comment to state.
  inputPendingField = (property, value) =>
    this.setState({
      [property]: value
  });

  // Submit the film entered into the form to the top ten list
  submitPendingFilm = e => {
    e.preventDefault();
    this.setState( prevState => {
      return {
        films : [
          {
            title: this.state.pendingTitle,
            year: this.state.pendingYear,
            comment: this.state.pendingComment,
            filmID,
            order,
          },
          ...prevState.films
        ],
        pendingTitle: "",
        pendingYear: "",
        pendingComment: "",
      };
    });
    filmID += 1;
    order += 1;
  }

  // remove an entry from the top ten list
  removeMovieEntry = filmID =>
      this.setState({
        films: [
        ...this.state.films.filter(film => filmID !== film.filmID).map((film, index) => {
          film.order = this.state.films.length - index;
          return film
        }),
      ]
    });


  moveMovieEntry = (id, direction) => {
    let newFilms = this.state.films.map((film, index) => {
      if(film.order === (id + direction)) {
        film.order = (id);
        return film
      }
      if(film.order === id) {
        film.order = (id + direction);
        return film
      } else {
        return film
      }
    }).sort((a, b) => a.order < b.order);
    this.setState({
      films: [
      ...this.state.films = newFilms,
    ]
    });
  }

  // move a movie entry up (+1 order) the list
  moveMovieEntryUp = id =>
    this.moveMovieEntry(id, 1);

  // move a movie entry down (-1 order) the list
  moveMovieEntryDown = id =>
    this.moveMovieEntry(id, -1);

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header
            shouldHideForm={this.state.shouldHideForm}
            toggleAddMovie={this.toggleAddMovie}
            submitPendingFilm={this.submitPendingFilm}
            pendingTitle={this.state.pendingTitle}
            pendingYear={this.state.pendingYear}
            pendingComment={this.state.pendingComment}
            inputPendingField={this.inputPendingField}
          />
          <MainContent
            films={this.state.films}
            removeMovieEntry={this.removeMovieEntry}
            moveMovieEntryUp={this.moveMovieEntryUp}
            moveMovieEntryDown={this.moveMovieEntryDown}
          />
        </div>{/* /wrapper */}
        {/* footer */}
        <footer>
            <a href="https://dannaroo.github.io/" target="_blank">Danny Ward Web Development</a>
        </footer>{/* /footer */}
      </div>
    );
  }
}

export default App;
