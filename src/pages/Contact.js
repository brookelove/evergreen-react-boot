import Hours from "../components/Hours";
import Location from "../components/Location";
import "../assets/css/pages/contact.css";
export default function Contact() {
  return (
    <>
      <h1>Check us Out</h1>
      <div className="locationHourContainer">
        <Location />
        <Hours />
      </div>
    </>
  );
}
