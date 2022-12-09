import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import spider from "../assets/images/galleryImages/spider_and_web.png";
import eye from "../assets/images/galleryImages/eye_leaf_trinity.png";
import octopus from "../assets/images/galleryImages/octopus_and_snake.png";
import trinity from "../assets/images/galleryImages/trinity.png";
import simple from "../assets/images/galleryImages/simple_and_shiny.png";
import round from "../assets/images/galleryImages/rounnd_the_conch.png";
import "../assets/css/compontents/carosel.css";
export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      img: spider,
      title: "spider",
      descrption: "spider caught in web",
    },
    {
      id: 2,
      img: eye,
      title: "spider",
      descrption: "spider caught in web",
    },
    {
      id: 3,
      img: octopus,
      title: "spider",
      descrption: "spider caught in web",
    },
    {
      id: 4,
      img: trinity,
      title: "spider",
      descrption: "spider caught in web",
    },
    {
      id: 5,
      img: simple,
      title: "spider",
      descrption: "spider caught in web",
    },
    {
      id: 6,
      img: round,
      title: "spider",
      descrption: "spider caught in web",
    },
  ];
  const [showModal, setModal] = useState(false);
  const [tempPicture, setTempPicture] = useState("");
  const [tempTitle, setTitle] = useState("");
  const [tempDes, setDes] = useState("");

  useEffect(() => {
    let space = () => {
      setModal(false);
    };
    document.addEventListener("mousedown", space);
  });

  const getImage = (img, title, descrption) => {
    setTempPicture(img);
    setTitle(title);
    setDes(descrption);
    setModal(!showModal);
  };
  return (
    <div className="carouselBackground">
      <h1 className="galleryTitle"> Gallery </h1>
      <div className={`lrgImgContainer ${showModal ? "active" : "inactive"}`}>
        <div className="whiteBox">
          <img src={tempPicture} className="blownImage" />
          <div className="galleryDesc">
            <h2 className="tempTitle">{tempTitle}</h2>
            <p>{tempDes}</p>
          </div>
        </div>
      </div>
      <div className="gallery">
        {galleryImages.map((item, index) => {
          return (
            <div
              className="pictures"
              key={index}
              onClick={() => getImage(item.img, item.title, item.descrption)}
            >
              <img src={item.img} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
