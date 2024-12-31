import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCats } from "../contexts/CatsContext";
import CatCardCarousel from "../components/CatCardCarousel";
import VideoColumn from "../components/VideoColumn";
import "./../App.css";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const cats =
    useCats()?.kittens.filter((cat) => cat.status === "available") || [];

  return (
    <main className="page-background paragraph-container">
      <h2 className="page-header">Welcome to Junglebeauty Bengal Cattery!</h2>
      <section className="section-text">
        <p>
          At JungleBeauty Bengal Cattery, we are passionate about raising
          healthy, socialized, and stunning Bengal cats. Located in the heart of
          the KW area, Ontario, Canada, we are a TICA-registered, family-run
          cattery committed to ethical breeding.
        </p>
        <p>
          Since 2018, we have been nurturing Bengal kittens in both rare and
          traditional colors. Our cats thrive in an enriched environment with
          custom-built cat trees, exercise wheels, and tunnels, growing into
          affectionate and confident companions by 12 weeks of age.
        </p>
        <p>
          Adopting a Bengal kitten is a big responsibility, and we provide
          support before and after adoption to ensure a smooth transition. Our
          kittens are more than pets—they are living beings deserving of love
          and care, ready to bring joy and elegance to your home.
        </p>
        <Link className="text-link" to="why-choose-junglebeauty">
          <h3 className="page-subheader">
            Our Commitment to You and Your Kitten
          </h3>
        </Link>
      </section>

      <section className="home-carousel-section">
        <h3>Our Stars</h3>
        <CatCardCarousel cats={cats} autoplay={true} />
        <p className="section-text">
          This holiday season, we are lucky to have exceptionally adorable
          Bengal kittens, each with unique charm and personality. Playful and
          affectionate, they are ready to bring joy, curiosity, and elegance to
          their forever homes. Click on a kitten below to learn more about their
          availability and details.
        </p>
      </section>

      <section>
        <h3>Daily kittens' life</h3>
        <div>
          <VideoColumn onVideosFetched={setVideos} />
          {videos.map((video) => (
            <div key={video.id} className="grid-item">
              <video controls src={video.url} />
              <p>{video.desc || "No description available"}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
