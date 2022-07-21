import "./EnterPage.styles.scss";

import { EnterForm } from "../../components/EnterForm";
import { DinoNameFact } from "../../components/DinoNameFact";
import { useUser } from "../../contexts/UserContext";
import { Dino } from "../../components/Dino";

export function EnterPage() {
  const { setUser } = useUser();

  const joinDinosaurs = (formState) => {
    setUser({ displayName: formState.displayName });
  }

  return (
    <div className="enter-page">
      <div className="enter-page__title">
        Chat with Dinosaurs
      </div>
      <div className="enter-page__form">
        <EnterForm onEnter={joinDinosaurs} />
      </div>
      <DinoNameFact />
      <Dino />
    </div>
    
  );
}