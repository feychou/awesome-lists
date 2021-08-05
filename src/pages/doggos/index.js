import React, { useEffect, useState } from "react";

import "./styles.css";

function Doggos() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/100")
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        setDogs(json.message);
      })
      .catch(() => console.log("Your request has failed"));
  }, []);

  return (
    <div className="DoggosList">
      {isLoading
        ? "Loading Mr.Doge..."
        : dogs.map((doggo, index) => (
            <div className="Doggo" key={index}>
              <img src={doggo} alt={index} width="250" />
            </div>
          ))}
    </div>
  );
}

export default Doggos;
