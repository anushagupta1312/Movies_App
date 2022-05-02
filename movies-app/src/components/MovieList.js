import React, { Component } from 'react'
import { movies } from '../movieData'

export default class MovieList extends Component {
  render() {
    let moviesArr = movies.results
    console.log(moviesArr)
    return (
      <div>
        {
          moviesArr.map((movieElem) => (
            <h1>{movieElem.title}</h1>
          )

          )
        }
      </div>
    )
  }
}
