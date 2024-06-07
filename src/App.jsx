import { useEffect, useState } from "react";
import Warning from "./components/Warning";
import Loading from "./components/Loading";
import Netflix_Slider from "./components/Netflix_Slider";

const App = () => {
  const [movie, setMovie] = useState([]);
  const [isloading, setisLoading] = useState(true);

  const url = "https://movies-api14.p.rapidapi.com/movies";
  const options = {
    method: "GET",
    headers: {
      //API key is like a secret password thought which developer-or-user send request to System (form were is data is exists)
      "X-RapidAPI-Key": "a299113d79msh34348938dbe2dd6p1f8e72jsn7b41ae5bb3dc",
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };

  const getMoviedata = async () => {
    setisLoading(true);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setisLoading(false);
      setMovie(data.movies);
    } catch (error) {
      console.log("Error occurred while fetching", error);
    }
  };

  useEffect(() => {
    getMoviedata();
  }, []);

  if (isloading) {
    return <Loading />;
  }
  return (
    <>
      <Warning />
      <div className="max-w-[1500px] m-auto">
        <Netflix_Slider movie={movie} />
      </div>
    </>
  );
};

export default App;
