/* eslint-disable react/prop-types */
import { Col, Divider, Row } from "antd";
import "./main.scss";
import { getAllMovieById } from "../../services/MovieServices";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AllMovieSlug = (props) => {
  const [allMovieById, setAllMovieById] = useState([]);
  const { idCategory, nameCategory } = props;
  const navigate = useNavigate();
  //console.log(idCategory, nameCategory);

  useEffect(() => {
    const fetchApiAllMovieById = async () => {
      await getAllMovieById(String(idCategory))
        .then((res) => setAllMovieById(res))
        .catch((err) => console.log(err));
    };
    fetchApiAllMovieById();
  }, [idCategory]);
  const DataMovie = allMovieById;
  //console.log(DataMovie);

  const handleClickDetailMovie = (movie) => {
    //console.log(movie);
    navigate("/chi-tiet", { state: movie });
  };
  return (
    <>
      <Divider orientation="left">
        <div className="divider"> {nameCategory}</div>
      </Divider>
      <Row gutter={[16, 24]}>
        {DataMovie &&
          DataMovie.map((movie) => (
            <Col className="gutter-row" span={4} key={movie._id}>
              <div onClick={() => handleClickDetailMovie(movie)}>
                <div
                  className="movie-item"
                  style={{
                    backgroundImage: `url(${movie.imagesUrl})`,
                    padding: 60,
                    height: 300,
                    cursor: "pointer",
                  }}
                >
                  <div className="movie-tag">
                    Tập {movie.episodeTotal}/{movie.episodeTotal} {movie.lang}
                  </div>
                </div>
                <div className="move-name">{movie.name}</div>
                <div className="move-time">{movie.time}</div>
              </div>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default AllMovieSlug;
