import "./App.css";
import { CategoryProvider } from "./Context/CategoryContext.jsx";
import LayoutDefault from "./layout/LayoutDefault";
function App() {
  return (
    <>
      <CategoryProvider>
        <LayoutDefault />
      </CategoryProvider>
    </>
  );
}

export default App;
