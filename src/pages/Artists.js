import Matt from "../assets/images/artists/MJ_pose.png";
import "../assets/css/pages/artist.css";
import About_Us from "../components/About";
export default function Artists() {
  return (
    <div>
    <div className="artistBackground">
      <h1 className="centerName">Our Artists</h1>
      <div className="artistContainer">
        <section className="mattContianer">
          <div className="centerName">
            <img src={Matt} className="mattJolly" />
            <h4>Matt Jolly</h4>
          </div>
        </section>
        <section className="avaContainer">
          <img className="ava" />
          <h4>Ava</h4>
        </section>
      </div>
      <h5>
        <a>Call to set up an appointment</a>
      </h5>
    </div>
      <About_Us />
    </div>
  );
}
