import { Routes, Route } from "react-router-dom";
import AllMoviesSlug from "../components/Main/AllMovieSlug";
import AllMovies from "../components/Main/AllMovies";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllMovies />}></Route>
        <Route path="/phim-se" element={<AllMoviesSlug />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
