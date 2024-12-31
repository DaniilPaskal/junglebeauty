import Carousel from "react-multi-carousel";
import CatCard from "./CatCard";
import "./../App.css";

const CatCardCarousel = ({ cats, autoplay = false, small = false }) => {
  return (
    <Carousel
      className="cat-card-carousel"
      autoPlay={false}
      autoPlaySpeed={5000}
      draggable
      infinite
      showDots
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1300 },
          items: 3, // 3 cards for desktop
          partialVisibilityGutter: 20,
        },
        tablet: {
          breakpoint: { max: 1300, min: 600 },
          items: 2, // 2 cards for tablet
          partialVisibilityGutter: 15,
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1, // 1 card for mobile
          partialVisibilityGutter: 10,
        },
      }}
    >
      {cats.map((cat) => (
        <div key={cat.id} className="cat-card-wrapper">
          <CatCard cat={cat} />
        </div>
      ))}
    </Carousel>
  );
};

export default CatCardCarousel;
