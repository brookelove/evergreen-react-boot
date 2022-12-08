import { Button } from "react-bootstrap";
import "../assets/css/compontents/headline.css";
import "animate.css";
export default function Headline() {
  return (
    <>
      <div className="custom-Jumbo">
        <div className="centered-text">
          <h1 className="animate__animated animate__fadeInLeft">
            Evergreen Body Mod
          </h1>
          <h3>Est.2021</h3>
          <a href="/gallery" className="jumboLink">
            <button className="galleryBtn">
              <h6 className="galleryTxt" data-text="Our Work"></h6>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
