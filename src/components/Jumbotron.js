import { Button } from "react-bootstrap";
import "../assets/css/compontents/jumbotron.css";
export default function Headline() {
  return (
    <>
      <div className="custom-Jumbo">
        <div className="centered-text">
          <h1>Evergreen Body Mod</h1>
          <Button variant="dark">Look at Our Work</Button>
        </div>
      </div>
    </>
  );
}
