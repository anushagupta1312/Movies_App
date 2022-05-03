import React, { Component } from 'react'
//import { movies } from '../movieData'
import axios from 'axios'

export default class MovieList extends Component {
  constructor() {
    super()

    this.state = {
      hover: '',
      movies: [],
      currPage: 1,
      parr: [1]
    }
  }

  async componentDidMount() {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=88b0ef26596932ed25b2cc7b88dcf12c&language=en-US&page=${this.state.currPage}`)
    let movieData = res.data
    console.log(movieData)

    this.setState({
      movies: [...movieData.results]
    })
  }

  changeMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=88b0ef26596932ed25b2cc7b88dcf12c&language=en-US&page=${this.state.currPage}`)
    let movieData = res.data
    console.log(movieData)

    this.setState({
      movies: [...movieData.results]
    })
  }

  handleNext = () => {
    let tempArr = []

    for (let i = 1; i <= this.state.parr.length + 1; i++) {
      tempArr.push(i)
    }

    this.setState({
      parr: [...tempArr],
      currPage: this.state.currPage + 1
    }, this.changeMovies)
  }
  render() {
    //let moviesArr = movies.results

    return (
      <>
        <div>
          <h3 className="text-center">
            <strong>Trending</strong>
          </h3>
        </div>

        <div className='movies-list'>
          {
            this.state.movies.map((moviesElem) => (
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

              {this.state.parr.map((value) => (
                <li class="page-item"><a class="page-link" href="#">{value}</a></li>
              ))}


              <li class="page-item"><a class="page-link" href="#" onClick={this.handleNext}>Next</a></li>
            </ul>
          </nav>
        </div>

      </>
    )
  }
}
