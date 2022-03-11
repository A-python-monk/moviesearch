import React from 'react';
import './card.css';

const imageApi ="https://image.tmdb.org/t/p/w1280";
function MovieCard(props) {
    console.log(props)
    return ( 
        <React.Fragment>
        <div class="col d-flex justify-content-center">
        <div className="meracard d-flex  " style={{width: '65%'}}>
        <img src={imageApi + props.movie.poster_path} className="card-img-top p-2" alt={props.movie.title} style={{width: '10rem'}}/>
        <div className="card-body p2">
            <h2 className='mytitle'>{props.movie.title} </h2>
            <p className='mytitle'>Release date : {props.movie.release_date} </p>
            <p className='mytitle'>Rating : {props.movie.vote_average} </p>
            <p className='mytitle'>{props.movie.overview} </p>
        </div>
      </div>
      </div>
        </React.Fragment>
     );
}

export default MovieCard;