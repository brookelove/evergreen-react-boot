import { Button } from "react-bootstrap";
import "../assets/css/compontents/jumbotron.css";
export default function Headline() {
  return (
    <>
      <div className="custom-Jumbo">
        <div className="centered-text">
          <h1>Evergreen Body Mod</h1>
          <h3>Est.2021</h3>
          <Button variant="dark">
            <a href="/gallery" className="jumboButton">
              Our Work
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
