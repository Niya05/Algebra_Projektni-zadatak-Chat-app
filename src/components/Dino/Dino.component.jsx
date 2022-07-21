import "./Dino.styles.scss";
import DinoIcon from "../../assets/dino-icon.svg";

export function Dino() {
  return (
        <img src={DinoIcon} alt="Dinosaur Icon" className="dino" />
  );
}