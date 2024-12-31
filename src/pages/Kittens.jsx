import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useCats } from "../contexts/CatsContext";
import CatCardCarousel from "../components/CatCardCarousel";
import KittenProfile from "../components/KittenProfile";
import KittenGallery from "../components/KittenGallery";
import "./../App.css";

const Kittens = () => {
  const location = useLocation();
  const [show, setShow] = useState(location.state ? true : false);
  const handleClose = () => setShow(false);
  var kittenID = "null";
  var cats = useCats();

  if (cats) {
    cats = cats.kittens.filter((cat) => cat.status === "available");
  } else {
    cats = [];
  }

  if (location.state) {
    kittenID = location.state;
    window.history.replaceState({}, document.title);
  }

  return (
    <main className="page-background paragraph-container">
      <h2 className="page-header">
        JungleBeauty's kittens available for reservation
      </h2>

      <CatCardCarousel cats={cats.sort((a, b) => (a.date > b.date ? -1 : 1))} />

      <KittenGallery />

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          <KittenProfile cat={cats.find((cat) => cat.id === kittenID)} />
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default Kittens;
