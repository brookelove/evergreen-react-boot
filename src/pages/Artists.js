import Matt from "../assets/images/artists/MJ_pose.png";
import "../assets/css/pages/artist.css";
import About_Us from "../components/About";
export default function Artists() {
  return (
    <div>
      <div className="artistBackground">
        <h1 className="centerName galleryTitle">Our Artists</h1>
        <div className="artistContainer">
          <section className="mattContianer">
            <div className="centerName">
              <img src={Matt} className="mattJolly" />
              <h4 className="artistName">Matt Jolly</h4>
              <p>Owner/ Body Modification Specialist</p>
            </div>
          </section>
          <section className="avaContainer">
            <img className="ava" />
            <h4 className="artistName">Ava</h4>
            <p>Apprentice</p>
          </section>
        </div>
        {/* <h5>
          <a>Call to set up an appointment</a>
        </h5> */}
      </div>
      <About_Us />
    </div>
  );
}
