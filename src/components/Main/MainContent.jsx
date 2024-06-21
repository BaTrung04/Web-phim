/* eslint-disable react/prop-types */

import { Pagination, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { useContext, useEffect, useState } from "react";
import { getAllMovie } from "../../services/MovieServices";
import AllMoviesSlug from "../Main/AllMovieSlug";
import AllMovies from "./AllMovies";
import { Routes, Route } from "react-router-dom";
import { CategoryContext } from "../../Context/CategoryContext";
import MovieDetail from "./MovieDetail";
import WatchMovie from "./WatchMovie";

const MainContent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [allMovie, setAllMovie] = useState([]);
  const [page, setPage] = useState("1");

  const Category = useContext(CategoryContext);
  //console.log(Category);
  const perPageCurrent = 24;
  useEffect(() => {
    const fetchApiAllMovie = async () => {
      await getAllMovie(page, perPageCurrent)
        .then((res) => setAllMovie(res))
        .catch((err) => console.log(err));
    };
    fetchApiAllMovie();
  }, [page]);

  const onChangePagination = (e) => {
    setPage(e);
    console.log(e);
  };
  return (
    <>
      <Content
        style={{
          padding: "60px 300px ",
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/" element={<AllMovies allMovie={allMovie} />}></Route>
            {Category &&
              Category.map((category) => {
                return (
                  <>
                    <Route
                      key={category._id}
                      path={`/${category.slug}`}
                      element={
                        <AllMoviesSlug
                          nameCategory={category.name}
                          idCategory={category._id}
                        />
                      }
                    ></Route>
                  </>
                );
              })}
            <Route path="/chi-tiet" element={<MovieDetail />}></Route>
            <Route path="/watch" element={<WatchMovie />}></Route>
          </Routes>
        </div>
      </Content>
      <Pagination
        defaultCurrent={1}
        total={allMovie.total}
        pageSize={perPageCurrent}
        showSizeChanger={false}
        onChange={onChangePagination}
        className="pagination"
        style={{ padding: 20 }}
      />
    </>
  );
};

export default MainContent;
