import { useLocation, useNavigate } from "react-router";
import { Button, Col, Row } from "antd";

import "./movieDetail.scss";
import ListPractice from "./ListPractice";
const MovieDetail = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  //console.log(state);
  const dataMovie = state;
  const DataPractice = state.listEpisodes;
  const handleClickWatchMovie = (DataPractice) => {
    navigate("/watch", { state: DataPractice });
  };
  return (
    <>
      <Row className="movie-detail gutter-row">
        <Col span={6} className="right-movie-detail">
          <div
            className="movie-item"
            style={{
              backgroundImage: `url(${dataMovie.imagesUrl})`,
              padding: 60,
              height: 400,
              cursor: "pointer",
            }}
          ></div>
          <Button
            className="movie-item-btn"
            block
            onClick={() => handleClickWatchMovie(DataPractice)}
          >
            Xem Phim
          </Button>
        </Col>
        <Col span={18} className="left-movie-detail">
          <div style={{ margin: 20 }}>
            <h2 className="movie-detail-name"> {dataMovie.name}</h2>
            <div className="movie-detail-content">
              <h3 className="movie-detail-content-h3">Nội dung chi tiết </h3>
              <div className="movie-detail-content-span">
                {dataMovie.content}
              </div>
              <div className="movie-detail-lang">
                {dataMovie.lang} 10h00 Thứ 3 hàng tuần tại PhimMoi
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <ListPractice DataPractice={DataPractice} />
    </>
  );
};

export default MovieDetail;
