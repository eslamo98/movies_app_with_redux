import React, { useEffect } from 'react'
import { apiClient } from '../../api/apiClient'
import { api } from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../store/MovieSlice'
import { getSeries } from '../../store/SeriesSlice'
import MoviesList from './MoviesList/MoviesList'
import SeriesList from './SeriesList/SeriesList'

import "./Home.css"
import Loading from '../Loading/Loading'

const Home = () => {
  const dispatch = useDispatch();
  const {movies, isLoadingMovie} = useSelector(state => state.movies)
  const {series, isLoadingSerie} = useSelector(state => state.series)
  useEffect(()=>{
    // const getMovies = async () => {
    //   const res = await apiClient.get(`?apikey=${api}&s=Harry`);
    //   console.log(res);
    // }

    // getMovies();
    dispatch(getMovies());
    dispatch(getSeries());
  },[dispatch])

  if(isLoadingMovie || isLoadingSerie) return <Loading />;

  return (
    <div className='home container'>
      <MoviesList movies={movies} isLoading={isLoadingMovie}/>
      <SeriesList series={series} isLoading={isLoadingSerie}/>
    </div>
  )
}

export default Home