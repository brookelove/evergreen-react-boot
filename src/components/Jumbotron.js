import { Button } from "react-bootstrap";
import "../assets/css/compontents/jumbotron.css";
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
          <Button className="jumboButton">
            <a href="/gallery" className="jumboLink">
              Our Work
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
