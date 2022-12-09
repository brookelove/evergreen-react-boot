import Matt from "../assets/images/artists/MJ_pose.png";
import "../assets/css/pages/artist.css";
import About_Us from "../components/About";
export default function Artists() {
  return (
    <div>
      <div className="artistBackground">
        <div className="transparentArtist">
          <h1 className="">Team</h1>
          <div className="artistContainer">
            <section className="mattContianer">
              <div className="centerName">
                <img src={Matt} className="mattJolly" />
                <h4>Matt Jolly</h4>
                <p>Modification Artist / Owner</p>
              </div>
            </section>
            <section className="avaContainer">
              <img className="ava" />
              <h4>Ava</h4>
              <p>Apprentice</p>
            </section>
          </div>
          {/* <h5>
          <a>Call to set up an appointment</a>
        </h5> */}
        </div>
      </div>
      <About_Us />
    </div>
  );
}
