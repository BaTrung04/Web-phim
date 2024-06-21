/* eslint-disable react/prop-types */
import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router";
const ListPractice = (props) => {
  const { DataPractice } = props;
  console.log(DataPractice);
  const navigate = useNavigate();

  const handleWatchMovieBySlug = ([item]) => {
    navigate("/watch", { state: [item] });
  };
  return (
    <div className="Movie-episode-list">
      <h3 orientation="left" className="Movie-episode-title">
        Danh sách tập
      </h3>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {DataPractice &&
          DataPractice.length > 0 &&
          DataPractice.map((item) => {
            return (
              <>
                <Col className="gutter-row Movie-episode-practice" span={3}>
                  <Button
                    className="Movie-episode-btn"
                    onClick={() => handleWatchMovieBySlug([item])}
                  >
                    Tập {item.name}
                  </Button>
                </Col>
              </>
            );
          })}
      </Row>
    </div>
  );
};

export default ListPractice;
