import React, { Component } from "react";
import { Films } from "../../Share/ListOfFilms";
import FilmsPresentation from "./FilmsPresentation";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      films: Films,
    };
  }

  render() {
    return <FilmsPresentation films={this.state.films}></FilmsPresentation>;
  }
}
export default Main;
