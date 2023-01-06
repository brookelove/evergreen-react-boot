import React, { useState, useEffect } from "react";
// import Modal from "react-bootstrap/Modal";
import spider from "../assets/images/galleryImages/spider_and_web.png";
import eye from "../assets/images/galleryImages/eye_leaf_trinity.png";
import octopus from "../assets/images/galleryImages/octopus_and_snake.png";
import trinity from "../assets/images/galleryImages/trinity.png";
import simple from "../assets/images/galleryImages/simple_and_shiny.png";
import round from "../assets/images/galleryImages/rounnd_the_conch.png";
import "../assets/css/compontents/carosel.css";
import cartilidgeChain from "../assets/images/galleryImages/caritlidge_chain.png";
import curvedCartilidge from "../assets/images/galleryImages/curved_cartilidge.png";
import dagger from "../assets/images/galleryImages/dagger.png";
import doubleNostrilChain from "../assets/images/galleryImages/double_nostril_chain.png";
import glitterGold from "../assets/images/galleryImages/glitter_gold.png";
import heartFromAbove from "../assets/images/galleryImages/heart_from_above.png";
import highLow from "../assets/images/galleryImages/high_low.png";
import industrial from "../assets/images/galleryImages/industrial.png";
import lightning from "../assets/images/galleryImages/lightning.png";
import lunarMothCZ from "../assets/images/galleryImages/lunar_CZ.png";
import opalSeptum from "../assets/images/galleryImages/opal_septum.png";
import rubyRed from "../assets/images/galleryImages/ruby_red.png";
import septumMedusa from "../assets/images/galleryImages/septum_medusa.png";
import shinySpider from "../assets/images/galleryImages/septum_medusa.png";
import simpleDouble from "../assets/images/galleryImages/simple_double.png";
import threeShiny from "../assets/images/galleryImages/three_shiny.png";
import titaniumChain from "../assets/images/galleryImages/titanium_chain.png";
import trinityCartilidge from "../assets/images/galleryImages/trinity_cartilidge.png";
import tripple from "../assets/images/galleryImages/tripple.png";
export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      img: spider,
      title: "spider and web",
      descrption:
        "Rook with 14Kt Yellow Gold Spider Top connected by a 14Kt Solid Gold Chain with 14Kt Yellow Gold Trinity Top. Tragus with 14Kt Yellow Gold Spiderweb Top.",
      JM: "Invictus",
    },
    {
      id: 2,
      img: eye,
      title: "Evil Eye",
      descrption:
        "Rook with 14Kt Yellow Gold Evil Eye. Lower lobe contains 14kT Marquise CZ Fan.",
      JM: "Invictus",
    },
    {
      id: 3,
      img: octopus,
      title: "Octopus & Snake",
      descrption:
        "Conch with 14Kt Yellow Gold Octopus. Rook with Titanium Threadless Snake.",
      JM: "Tawapa",
    },
    {
      id: 4,
      img: trinity,
      title: "3-Clear Gem",
      descrption: "Rook with 14Kt White Gold Trinity Top",
      JM: "Tawapa",
    },
    {
      id: 5,
      img: simple,
      title: "Simple",
      descrption: "Conch with CZ Gem",
      JM: "Tawapa",
    },
    {
      id: 6,
      img: round,
      title: "Round",
      descrption: "Tragus with CZ Gem",
      JM: "Tawapa",
    },
    {
      id: 7,
      img: cartilidgeChain,
      title: "Marquise with Chain",
      descrption:
        "Double and Tripple. Helix with 14Kt Yellow Gold Rainbow CZ Cluster",
      JM: "Tawapa",
    },
    {
      id: 8,
      img: curvedCartilidge,
      title: "Around the Helix",
      descrption: "Helix with ",
      JM: "Tawapa",
    },
    {
      id: 9,
      img: dagger,
      title: "Pierce Me",
      descrption: "Tragus with 14Kt Yellow Gold Dagger",
      JM: "Tawapa",
    },
    {
      id: 10,
      img: doubleNostrilChain,
      title: "spider",
      descrption: "Nostril pierced with ",
      JM: "Tawapa",
    },
    {
      id: 11,
      img: glitterGold,
      title: "spider",
      descrption:
        "Helix with 14Kt Yellow Gold Lightning Bolt Dagger. Rook with ____. Conch with 14Kt Yellow Gold Anatomical Human Heart",
      JM: "Tawapa",
    },
    {
      id: 13,
      img: heartFromAbove,
      title: "Heart from Above",
      descrption: "Hekix shown with a Titanium Textured Heart",
      JM: "Tawapa",
    },
    {
      id: 14,
      img: highLow,
      title: "butterfly",
      descrption:
        "Tragus with 14Kt Yellow Gold butterly. Conch with a Curved bar CZ",
      JM: "Tawapa",
    },
    {
      id: 15,
      img: industrial,
      title: "industrial",
      descrption:
        "Industrial with titanium bar. Second lobe with Pyramid Top. Third lobe with Yellow Gold Circle Top.",
      JM: "Tawapa",
    },
    {
      id: 16,
      img: lightning,
      title: "Lightning",
      descrption: "Tragus shows with 14kT Yellow Gold Lightning Top",
      JM: "Tawapa",
    },
    {
      id: 17,
      img: lunarMothCZ,
      title: "Lunar Moth",
      descrption:
        "Double Conch CZ Titanium Gem and 14Kt Yellow Gold Lunar Moth.",
      JM: "Tawapa & Neometal",
    },
    {
      id: 18,
      img: opalSeptum,
      title: "Opal Septum",
      descrption: "Septum with Titanium with Round Opal Clicker iodized Gold",
      JM: "Invictus",
    },
    {
      id: 19,
      img: rubyRed,
      title: "spider",
      descrption:
        "Conch royally embued with 14kt Yellow Gold Crown CZ Gem. Rook 14Kt Starburt Top",
      JM: "Invictus",
    },
    {
      id: 20,
      img: septumMedusa,
      title: "Septum and Filtrum",
      descrption:
        "Filtrum with 14Kt Yellow Gold Starburst with Purple Opal and Septum with Titanium Clustered Square CZ Clicker.",
      JM: "Tawapa",
    },
    {
      id: 21,
      img: simpleDouble,
      title: "Simple Double",
      descrption: "Double lobe with CZ Gem",
      JM: "NeoMetal",
    },
    {
      id: 22,
      img: threeShiny,
      title: "Three Shiny Rooks",
      descrption: "CZ Gem",
      JM: "Tawapa",
    },
    {
      id: 23,
      img: trinityCartilidge,
      title: "spider",
      descrption: "Rook and two Inner ear piercings with Yellow CZ Gems",
      JM: "Neometal",
    },
    {
      id: 24,
      img: tripple,
      title: "spider",
      descrption:
        "Helix with a Titanium Beaded Opal Trinity Top, Conch with Titanium Curved Bar 6 Round CZs, Second Lobe with Titanium Hammered Disk Top",
      JM: "Tawapa",
    },
    {
      id: 25,
      img: titaniumChain,
      title: "spider",
      descrption:
        "Double pierced Titanium Threadless Synthetic Opal Tops Nostril piercing with a titanium chain. Bridge pierced with Titanium Threaded Spike Top",
      JM: "Invictus",
    },
  ];
  const [showModal, setModal] = useState(false);
  const [tempPicture, setTempPicture] = useState("");
  const [tempTitle, setTitle] = useState("");
  const [tempDes, setDes] = useState("");
  const [tempJM, setJM] = useState("");

  useEffect(() => {
    let space = () => {
      setModal(false);
    };
    document.addEventListener("mousedown", space);
  });

  const getImage = (img, title, descrption, jm) => {
    setTempPicture(img);
    setTitle(title);
    setDes(descrption);
    setJM(jm);
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
            <p>{tempJM}</p>
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
