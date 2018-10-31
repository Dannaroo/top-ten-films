import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';

// declare a variable to use as a key for every film in the list. both to be -1 with empty films array.
let filmID = 0;
let order = 0;

class App extends Component {

  state = {
    shouldHideForm: true,
    pendingTitle: "",
    pendingYear: "",
    pendingComment: "",
    films: [
      // {
      //   title: 1,
      //   year: 1,
      //   comment: 1,
      //   filmID: 0,
      //   order: 4,
      //   upArrow: true,
      //   downArrow: true,
      // },
      // {
      //   title: 2,
      //   year: 2,
      //   comment: 2,
      //   filmID: 1,
      //   order: 3,
      //   upArrow: true,
      //   downArrow: true,
      // },
      // {
      //   title: 3,
      //   year: 3,
      //   comment: 3,
      //   filmID: 2,
      //   order: 2,
      //   upArrow: true,
      //   downArrow: true,
      // },
      // {
      //   title: 4,
      //   year: 4,
      //   comment: 4,
      //   filmID: 3,
      //   order: 1,
      //   upArrow: true,
      //   downArrow: true,
      // },
      // {
      //   title: 5,
      //   year: 5,
      //   comment: 5,
      //   filmID: 4,
      //   order: 0,
      //   upArrow: true,
      //   downArrow: true,
      // },
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
            upArrow: false,
            downArrow: false,
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
    this.setArrows();
  }

// if there are no entries, do not set any arrows at all, or...
  setArrows = () => {
      // ...if there are multiple entries, set the first entries upArrow to false and the last entries downArrow to false and all the remaining both arrows to true.
    if (this.state.films.length) {
      this.setState( prevState => {
        films: prevState.films.map((film, index) => {
          // if its the first entry. disable the up arrow
          if(index === 0) {
            film.upArrow = false;
            // ...if there is only one entry: disable the down arrow too.
            if(prevState.films.length === 1) {
              film.downArrow = false;
            } else {
              film.downArrow = true;
            }
            return film
          } else if (index === prevState.films.length - 1) {
            film.downArrow = false;
            film.upArrow = true;
          } else {
            film.upArrow = true;
            film.downArrow = true;
            return film
          }
        });
      });
    }
  }

  // IN PROGRESS

  // remove an entry from the top ten list
  removeMovieEntry = filmID => {
    this.setState({
      films: [
        ...this.state.films.filter(film => filmID !== film.filmID).map((film, index) => {
          film.order = this.state.films.length - index;
          return film
        }),
      ]
    });
    this.setArrows();
  }

  //get the order id position of a film and the direction you want it to move (up or down). swap the order properties of the moving films, then resort the order properties of the array.
  moveMovieEntry = (order, direction) => {
    this.setState({
      films: [
      ...this.state.films.map((film, index) => {
          if(film.order === (order + direction)) {
            film.order = (order);
            return film;
          } else if (film.order === order) {
            film.order = (order + direction);
            return film;
          } else {
            return film;
          }
      }).sort((a, b) => a.order < b.order),
    ]
    });
  }

  // move a movie entry up (+1 order) the list
  moveMovieEntryUp = id => {
    this.moveMovieEntry(id, 1);
    this.setArrows();
  }

  // move a movie entry down (-1 order) the list
  moveMovieEntryDown = id => {
    this.moveMovieEntry(id, -1);
    this.setArrows();
  }

// find the top three movies and give them the appropriate class names.
  getTopThree = (index) => {

      if (index === 0) {
        return "numbers first";
      } else if (index === 1) {
        return "numbers second";
      } else if(index === 2) {
        return "numbers third";
      } else {
        return "numbers";
      }

  }
  componentWillMount() {
    this.setArrows();
  }


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
            getTopThree={this.getTopThree}
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
