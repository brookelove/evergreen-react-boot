import Hours from "../components/Hours";
import Location from "../components/Location";
import Socials from "../components/Socials";
import "../assets/css/pages/contact.css";

export default function Contact() {
  return (
    <>
      <h1 className="galleryTitle">Check us Out</h1>
      <div className="locationHourContainer">
        <Location />
        <Hours />
      </div>
      <Socials />
    </>
  );
}
