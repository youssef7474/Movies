import React from 'react';
import CardMovie from './CardMovie';
import PaginationCompo from './PaginationCompo';
import Backgroundphoto from './Background/Backgroundphoto';

const MovieListe = ({movies,getcurentpage,pagecount}) => {

    
  return (
    <div>

    <div className="responsive-div">
    
    {movies.length >=1?(
        movies.map((el)=>{
            return(
                <CardMovie key={el.id} el={el}></CardMovie>
            )
        })
    ):<h1 className='text-center p-5'>No movies found</h1>}

    {
        movies.length >=1?(
            <PaginationCompo getcurentpage={getcurentpage} pagecount={pagecount}></PaginationCompo>
        ):null
    }

</div>
    </div>
  
  );
}

export default MovieListe;
