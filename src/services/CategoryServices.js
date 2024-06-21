import axios from "axios";

export const getAllCategory = async () => {
  const res = await axios.get("http://localhost:8081/v1/category");
  return res.data;
};
