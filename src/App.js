import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SeriesDetails from "./components/SeriesDetails/SeriesDetails";
import NotFound from "./components/NotFound/NotFound";
import { useSelector } from "react-redux";


import "./App.css"
import SearchResults from "./components/SearchResults/SearchResults";

function App() {

  const { chosenMovie, isLoadingMovie, movies } = useSelector(state => state.movies)
  const { chosenSerie, isLoadingSerie } = useSelector(state => state.series)

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie/:movieId" element={<MovieDetails chosenMovie={chosenMovie} isLoading={isLoadingMovie} />} />
          <Route exact path="/serie/:serieId" element={<SeriesDetails chosenSerie={chosenSerie} isLoading={isLoadingSerie} />} />
          <Route exact path="/results" element={<SearchResults movies={movies} isLoading={isLoadingMovie} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );

}

export default App;
