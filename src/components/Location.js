export default function Location() {
  return (
    <div className="googleMapsBox">
      <div className="googleMaps">
        {/* where the google map lies */}
        <iframe
          title="googleMaps"
          width="220%"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Evergreen%20Body%20Mod&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
      <div className="googleMapsTextBox">
        <div className="addressBox">
          <h1 className="gridContainer">Address</h1>
          {/* get the link to here */}
          <a
            className="contactLinks hoverUnderlineAnimate"
            href="https://www.google.com/maps/place/Evergreen+Body+Mod/@47.1908985,-122.2963096,17z/data=!3m1!4b1!4m5!3m4!1s0x5490ffa8b52de03b:0x978a7663f745c8b7!8m2!3d47.1908949!4d-122.2941209"
            rel="noreferrer"
            target={"_blank"}
          >
          </a>
        </div>
      </div>
    </div>
  );
}
