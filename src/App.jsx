import { useEffect, useState } from "react";
import Warning from "./components/Warning";
import Loading from "./components/Loading";
import Netflix_Slider from "./components/Netflix_Slider";

const App = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://movies-api14.p.rapidapi.com/movies";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a299113d79msh34348938dbe2dd6p1f8e72jsn7b41ae5bb3dc",
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };
  const getMoviedata = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setLoading(false);
      console.log(data);
      setMovie(data.movies);
    } catch (error) {
      console.log("Error occurred while fetching", error);
    }
  };

  useEffect(() => {
    getMoviedata();
  }, []);

  if (loading) {
    <Loading />;
  }
  return (
    <>
      <Warning />
      <Netflix_Slider movie={movie} />
    </>
  );
};

export default App;
