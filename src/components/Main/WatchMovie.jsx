import { useLocation } from "react-router";
//import ListPractice from "./ListPractice";
const WatchMovie = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  return (
    <>
      <iframe
        src={state[0].link_embed}
        frameBorder={0}
        allowFullScreen
        width="1200"
        height="700"
        loading="lazy"
      ></iframe>
      {/* <ListPractice DataPractice={state} /> */}
    </>
  );
};

export default WatchMovie;
