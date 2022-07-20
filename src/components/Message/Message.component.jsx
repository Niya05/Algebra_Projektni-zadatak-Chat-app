import "./Message.styles.scss";

import { Avatar } from "../Avatar";
import { MessageText } from "../MessageText";
import { useEffect } from "react";
import { useRef } from "react";

export function Message(props) {
  const elementReference = useRef();

  useEffect(() => {
    elementReference.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div ref={elementReference} className="message">
      <div className="message__avatar">
        <Avatar
          backgroundColor={props.avatarBackgroundColor}
          text={props.avatarText}
        />
      </div>
      <div className="message__text">
        <MessageText
          displayName={props.displayName}
          time={props.time}
        >
          {props.children}
        </MessageText>
      </div>
    </div>
  );
}