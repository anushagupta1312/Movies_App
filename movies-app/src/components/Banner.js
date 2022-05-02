import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        let backdrop = '/6EdKBYkB1ssgGjc249ud1L55o8d.jpg'
        return (
            <div className="card banner-card" >
                <img src={`https://image.tmdb.org/t/p/original${backdrop}`}
                    className="card-img-top banner-img" alt="..." />
                {/* <div className="card-body"> */}
                <h5 className="card-title banner-title">Black Panther</h5>
                <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                {/* </div> */}
            </div>
        )
    }
}
