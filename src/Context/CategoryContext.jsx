/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { getAllCategory } from "../services/CategoryServices";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    const fetchApiAllCategory = async () => {
      await getAllCategory()
        .then((res) => setAllCategory(res))
        .catch((err) => console.log(err));
    };
    fetchApiAllCategory();
  }, []);
  //console.log(allCategory);
  return (
    <CategoryContext.Provider value={allCategory}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
