import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import spider from "../assets/images/galleryImages/spider_and_web.png";
import eye from "../assets/images/galleryImages/eye_leaf_trinity.png";
import octopus from "../assets/images/galleryImages/octopus_and_snake.png";
import trinity from "../assets/images/galleryImages/trinity.png";
import simple from "../assets/images/galleryImages/simple_and_shiny.png";
import round from "../assets/images/galleryImages/rounnd_the_conch.png";
import { Card } from "react-bootstrap";
import "../assets/css/compontents/carosel.css";
import userEvent from "@testing-library/user-event";

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
      {/* className={showModal ? "showModal open" : "showModal"} */}
      <div className={`largePhoto ${showModal ? "active" : "inactive"}`}>
        <img src={tempPicture} />
        <h2>{tempTitle}</h2>
        <p>{tempDes}</p>
        <AiOutlineClose />
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
