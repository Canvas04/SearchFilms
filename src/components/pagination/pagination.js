import React from 'react';
import './pagination.css';
import {Pagination as PaginationEl } from 'antd';
 function Pagination ({pages,currentPage,nextPage,value,loading}) {

    return <>
    { value === '' || loading ? null :  <PaginationEl defaultCurrent={currentPage} total={pages}  onChange={ nextPage}/>}
    </>
}
export default Pagination;