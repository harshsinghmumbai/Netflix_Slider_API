const Netflix_Slider = ({ movie }) => {
  return (
    <>
      {movie.map((curElem, id) => {
        const {
          original_title,
          backdrop_path,
          contentType,
          genres,
          release_date,
        } = curElem;
        return (
          <div className="w-full h-full border border-black" key={id}>
            <img
              className="w-full h-fit"
              src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
              alt={original_title}
            />
            <div className="w-full h-fit bg-black bg-opacity-50">
              <div className="w-full h-fit flex justify-between items-center">
                <div className="w-full h-fit">
                  <h1 className="text-white">{original_title}</h1>
                  <p className="text-white">{release_date}</p>
                </div>
                <div className="w-full h-fit">
                  <p className="text-white">{contentType}</p>
                  <p className="text-white">{genres}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Netflix_Slider;
