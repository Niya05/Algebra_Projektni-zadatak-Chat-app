import "./JoinPage.styles.scss";

import { JoinForm } from "../../components/JoinForm";
import { DinoNameFact } from "../../components/DinoNameFact";
import { useUser } from "../../contexts/UserContext";

export function JoinPage(props) {
  const { setUser } = useUser();

  const joinDinosaurs = (formState) => {
    setUser({ displayName: formState.displayName });
  }

  return (
    <div className="join-page">
      <div className="join-page__title">
        Chat with Dinosaurs
      </div>
      <div className="join-page__form">
        <JoinForm onJoin={joinDinosaurs} />
      </div>
      <DinoNameFact />
    </div>
  );
}