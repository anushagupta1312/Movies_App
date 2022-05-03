import React, { Component } from 'react'
import { movies } from '../movieData'

export default class MovieList extends Component {
  constructor() {
    super()

    this.state = {
      hover: ''
    }


  }
  render() {
    let moviesArr = movies.results
    // console.log(moviesArr)
    return (
      // <div>
      //   {
      //     moviesArr.map((movieElem) => (
      //       <h1>{movieElem.title}</h1>
      //     )

      //     )
      //   }
      // </div>
      <>
        <div>
          <h3 className="text-center">
            <strong>Trending</strong>
          </h3>
        </div>

        <div className='movies-list'>
          {
            moviesArr.map((moviesElem) => (
              <div className="card movie-card" onMouseEnter={() => this.setState({ hover: moviesElem.id })} onMouseLeave={() => this.setState({ hover: '' })}>
                <img src={`https://image.tmdb.org/t/p/original${moviesElem.backdrop_path}`}
                  className="card-img-top movie-img" style={{ height: '40vh', width: '20vw' }} alt="..." />

                <p className="card-title movie-title">{moviesElem.title}</p>

                {
                  this.state.hover == moviesElem.id &&
                  <div className='button-wrapper' style={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="#" className="btn btn-primary movie-button text-center">Add to Favourites</a>
                  </div>

                  //&&-> if cond1 sets true then perform the action specified in cond2
                  //alternative of if
                }

              </div>
            ))
          }
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>

      </>
    )
  }
}
