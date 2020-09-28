import React from 'react';
import { DebounceInput } from "react-debounce-input";
import Pagination from "../pagination";
import {GenreProvider} from '../genres-context';
import CardList from '../cardList';
import './tab1.css';

export default function Tab1 ({onChangeHandler,value,genres,data,loading,onClose,isError,totalResults,numberPages,nextPage,currentPage,rateFilms,session}) {
    return <>
    <DebounceInput
    minLength={1}
    debounceTimeout={100}
    onChange={onChangeHandler}
    value={value}
   className='input'
  />
    <GenreProvider value={genres}>  <CardList
    data={data}
    loading={loading}
    onClose={onClose}
    isError={isError}
    rateFilms={rateFilms}
    session={session}
  /></GenreProvider>

  
  {totalResults > 20 ? (
    <Pagination
      pages={numberPages}
      nextPage={nextPage}
      currentPage={currentPage}
      value={value}
      loading={loading}
    />
  ) : null}
  </>
}