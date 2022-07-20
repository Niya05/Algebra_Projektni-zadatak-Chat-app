import "./DinoNameFact.styles.scss";
import { useEffect, useState } from "react";

function getDinoNameFact() {
  return fetch("https://dinosaur-facts-api.shultzlab.com/dinosaurs/random")
    .then((response) => {
      return response.json();
    });
}

export function DinoNameFact() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDinoNameFact()
      .then((data) => { setData(data); })
      .catch((error) => { setError(error); });
  }, []);

  if (error !== null) {
    return <div>Seems like this dinosaur isn't ready to hatch...</div>;
  }

  if (data === null) {
    return <div>Hatching dinosaur...</div>;
  }

  return (
    <div className="dino-name">
      <p style={{fontWeight: "bold"}}>Dinosaur fact:</p>
      <br />
      <p style={{fontWeight: "bold"}}>{data.Name}</p>
      <br />
      <p>{data.Description}</p>
    </div>
  );
};