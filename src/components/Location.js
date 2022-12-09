import "../assets/css/compontents/location.css";
export default function Location() {
  return (
    <div className="googleMapsBox">
      <iframe
        width="420"
        height="400"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=106%20W%20Meeker%20Puyallup+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      {/* <a href="https://maps-generator.com/">Maps Generator</a> */}
    </div>
  );
}
