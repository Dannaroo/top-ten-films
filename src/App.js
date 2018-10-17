import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';

// declare a variable to use as a key for every film in the list.
let filmID = -1;

class App extends Component {

  state = {
    shouldHideForm: true,
    pendingTitle: "",
    pendingYear: "",
    pendingComment: "",
    films: [],
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
            filmID
          },
          ...prevState.films
        ],
        pendingTitle: "",
        pendingYear: "",
        pendingComment: "",
      };
    });
    filmID += 1;
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
          <MainContent />
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
