export default function Hours() {
  return (
    <div className="hoursOpen">
      <ul className="gridUl">
        <h1 className="gridContainer">Hours</h1>
        <div className="gridItem">
          <p className="hourInfoL">Sunday</p>
          <p className="hourInfoR">CLOSED</p>
        </div>
        <div className="gridItem">
          <p className="hourInfoL">Monday</p>
          <p className="hourInfoR">CLOSED</p>
        </div>
        <div className="gridItem">
          <p className="hourInfoL">Tuesday</p>
          <p className="hourInfoR">10AM - 6PM</p>
        </div>
        <div className="gridItem">
          <p className="hourInfoL">Wednesday</p>
          <p className="hourInfoR">10AM - 6PM</p>
        </div>
        <div className="gridItem">
          <p className="hourInfoL">Thursday</p>
          <p className="hourInfoR">10AM - 6PM</p>
        </div>
        <div className="gridItem">
          <p className="hourInfoL">Friday</p>
          <p className="hourInfoR">10AM - 6PM</p>
        </div>
        <div className="gridItem">
          <p className="hourInfoL">Saturday</p>
          <p className="hourInfoR">10AM - 6PM</p>
        </div>
      </ul>
    </div>
  );
}
