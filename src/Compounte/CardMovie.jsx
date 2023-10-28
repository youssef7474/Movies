import React from 'react';
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const CardMovie = ({el}) => {

  return (

    <Col xs="6" sm="6" md="4" lg="3" className="my-1" style={{padding:"10px"}}>
        <Link to={`/movie/${el.id}`}>
            <div className="card">
            <img src={`https://image.tmdb.org/t/p/w500`+el.poster_path}  className="card__image" alt="hu" />
            <div className="card__overlay">
                <div className="overlay__text text-center w-100 p-2">
                    <p>Name : {el.original_title}</p>
                    <p>Release Date : {el.release_date}</p>
                    <p>Rate : {el.vote_average}</p>
                    <p>vote count : {el.vote_count}</p>
                </div>
            </div>
            </div>
        </Link>
    </Col >
  );
}

export default CardMovie;
