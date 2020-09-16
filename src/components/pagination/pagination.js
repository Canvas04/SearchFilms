import React from 'react';
import './pagination.css';
import {Pagination as PaginationEl } from 'antd';
 function Pagination ({pages,currentPage,nextPage}) {
    // const pageLink = [];
    
    // for(let i = 1; i < pages; i++)  {
    //     let active = currentPage == i ? 'active' : '';

    //     pageLink.push()
    // }
    return <>
    <PaginationEl defaultCurrent={currentPage} total={pages}  onChange={ nextPage}/>
    </>
}
export default Pagination;