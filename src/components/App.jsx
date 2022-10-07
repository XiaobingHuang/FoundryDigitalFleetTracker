import React from "react";
import Car from "./Car";
import cars from "../cars";
import Avatar from "./Avatar";

function createCar(car) {
  return (
    <Car
      key={car.id}
      name={car.name}
      img={car.imgURL}
      tel={car.phone}
      email={car.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Cars</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C5603AQE-kQt5vAi-8Q/profile-displayphoto-shrink_100_100/0/1654378201935?e=1670457600&v=beta&t=CwEHOIc9a1ZA0VqgTw_5wcssF9Sc55ghM7yNuwnC94Q" />
      {cars.map(createCar)}
      <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  );
}

export default App;
