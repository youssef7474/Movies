import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import poster from "../assets/meg.jpeg"
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
const MovieDetails = () => {
    const id=useParams()
  
    const apiKey = "d8c3f6985d89a7dca953bf500b1395e2";

    const [movieDetail,setMovieDeetails]=useState([])

    const getmovieDetails = async () => {
        try {
            const res = await axios.get(
                `https://api.themoviedb.org/3/movie/${id.id}?api_key=${apiKey}&language=language=en-US`
              );
           
              setMovieDeetails(res.data)
        } catch (error) {
            console.log(error)
        }
      
    
      };


     useEffect(()=>{
        getmovieDetails()
     },[])

  return (
    <div>
    <Row className="justify-content-center " style={{marginBottom:"50px"}}>
        <Col md="12" xs="12" sm="12" className="mt-4 ">
            <div className="card-detalis  d-flex align-items-center mobileview " style={{height:"100%"}}>
                <img
                    className="img-movie w-30"
                    src={`https://image.tmdb.org/t/p/w500`+movieDetail.poster_path}
                    alt="ascad"
                />
                <div className="justify-content-center text-center  mx-auto">
                    <p className="card-text-details border-bottom">
                        Movie Name: {movieDetail.original_title}
                    </p>
                    <p className="card-text-details border-bottom">
                        Release Date  : {movieDetail.release_date}
                    </p>
                    <p className="card-text-details border-bottom">
                        vote count   :  {movieDetail.vote_count}
                    </p>
                    <p className="card-text-details border-bottom">
                        Rate :  {movieDetail.vote_average}
                    </p>
                </div>
            </div>
        </Col>
    </Row>

    <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
            <div className="card-story  d-flex flex-column align-items-start">
                <div className="text-end p-4 ">
                    <p className="card-text-title border-bottom">Over view</p>
                </div>
                <div className=" px-2">
                    <p className="card-text-story">{movieDetail.overview}</p>
                </div>
            </div>
        </Col>
    </Row>
    <Row className="justify-content-center">
        <Col
            md="10"
            xs="12"
            sm="12"
            className=" d-flex justify-content-center "
            style={{margin:'50px'}}
            >
            <Link to="/" >
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" }}
                    className="btn btn-primary mx-2">
                     Back
                </button>
            </Link>
            <a href={movieDetail.homepage} target="_blank">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              Watch movie
            </button>
          </a>
        </Col>
    </Row>
</div>
  );
}

export default MovieDetails;
