import Hours from "../components/Hours";
import Location from "../components/Location";
import "../assets/css/pages/contact.css";
export default function Contact() {
  return (
    <>
      <div className="locationAndHoursContainer">
        <Location />
        <Hours />
      </div>
    </>
  );
}
