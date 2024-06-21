/* eslint-disable react/prop-types */
import { Col, Divider, Row } from "antd";

import "./main.scss";
import { useNavigate } from "react-router";
// eslint-disable-next-line react/prop-types
const AllMovies = (props) => {
  const { allMovie } = props;
  const DataMovie = allMovie.rows;
  const navigate = useNavigate();

  const handleClickDetailMovie = (movie) => {
    //console.log(movie);
    navigate("/chi-tiet", { state: movie });
  };
  return (
    <>
      <Divider orientation="left">
        <div className="divider"> Danh Sách Phim</div>
      </Divider>
      <Row gutter={[16, 24]}>
        {DataMovie &&
          DataMovie.map((movie) => (
            <Col className="gutter-row" span={4} key={movie._id}>
              <div
                onClick={() => handleClickDetailMovie(movie)}
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
            </Col>
          ))}
      </Row>
    </>
  );
};

export default AllMovies;
