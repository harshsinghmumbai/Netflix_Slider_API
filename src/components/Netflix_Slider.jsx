import Carousel from "react-multi-carousel"; //logic part of carousel in react //
import "react-multi-carousel/lib/styles.css"; // styling part of carousel in react //

const Netflix_Slider = ({ movie }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="m-auto">
        <Carousel responsive={responsive} transitionDuration={500}>
          {movie.map((curElem, id) => {
            const { original_title, backdrop_path: image, overview } = curElem;
            const title = original_title.substring(0, 20);
            return (
              <div
                className="w-full h-fit border border-black rounded-xl relative ml-2"
                key={id}
              >
                <img
                  className="w-full h-[21rem] xl:h-[32rem] rounded-xl object-cover "
                  src={image}
                  alt={original_title}
                />
                <div className="w-full h-fit flex justify-between items-center absolute bottom-2 left-3">
                  <h1 className="text-white font-semibold text-lg xl:text-5xl shadow-xl font-serif">
                    {original_title.length >= 15
                      ? `${title}...`
                      : original_title}
                  </h1>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Netflix_Slider;
