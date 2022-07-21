import "./Icon.styles.scss";
import DinoFoot from "../../assets/foot-icon.svg";

export function Icon(props) {
  switch (props.variant) {
    case 'send': return <img  src={DinoFoot} />;
    default: return null;
  }
}