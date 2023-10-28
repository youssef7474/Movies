import React, { useEffect, useState } from 'react';

import NavBar from './Compounte/NavBar';
import { Container } from 'react-bootstrap';
import MovieListe from './Compounte/MovieListe';
import axios from 'axios'

import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import MovieDetails from './Compounte/MovieDetails';
import Backgroundphoto from './Compounte/Background/Backgroundphoto';
const App = () => { 

  const apiKey = "d8c3f6985d89a7dca953bf500b1395e2";


  const [movies,setmovies]=useState([])
  const [pagecount,setpagecount]=useState(0)

  const getAllMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`
    );
    setmovies(res.data.results)
    setpagecount(res.data.total_pages)

  };


  useEffect(()=>{
    getAllMovies()
  },[])



  const search= async(word)=>{
    if(word==="")
    {
      getAllMovies()
    }else{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${word}`)
      setmovies(res.data.results)
      setpagecount(res.data.total_pages)
    }

  }


  const getcurentpage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
    );
    setmovies(res.data.results)

  };

  return (
    <div>
      <NavBar search={search}></NavBar>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MovieListe movies={movies} getcurentpage={getcurentpage} pagecount={pagecount}></MovieListe>}></Route>
            <Route path='/movie/:id' element={<MovieDetails></MovieDetails>}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
