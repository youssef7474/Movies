import React from 'react';
import ReactPaginate from 'react-paginate';

const PaginationCompo = ({getcurentpage,pagecount}) => {



    const handlePageClick = (data) => {
        getcurentpage(data.selected+1)
    }
    const pageCount = pagecount



  return (
    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
    <ReactPaginate
    breakLabel="..."
    nextLabel="Next"
    onPageChange={handlePageClick}
    marginPagesDisplayed={1}
    pageRangeDisplayed={1}
    pageCount={pageCount}
    previousLabel="previous "
    containerClassName={"pagination  p-3"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    nextClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    activeClassName={"active"}
/>
    </div>

  );
}

export default PaginationCompo;
