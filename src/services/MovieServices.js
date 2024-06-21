import axios from "axios";

export const getAllMovie = async (page, perPageCurrent) => {
  const res = await axios.get("http://localhost:8081/v1/movies/all", {
    params: {
      page: page,
      perPage: perPageCurrent,
    },
  });
  return res.data;
};

export const getAllMovieById = async (id) => {
  const res = await axios.get(`http://localhost:8081/v1/movies/all/${id}`);
  return res.data;
};
