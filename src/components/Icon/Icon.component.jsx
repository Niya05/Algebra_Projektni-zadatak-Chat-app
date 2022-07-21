import "./Icon.styles.scss";
import DinoFoot from "../../assets/foot-icon.svg";

export function Icon(props) {
  switch (props.variant) {
    case 'send': return <img  src={DinoFoot} alt={"Dinosaur Foot Icon"} />;
    default: return null;
  }
}