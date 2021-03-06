import { useState } from "react";
import { EnterForm as Component } from "./EnterForm.component";

export function EnterForm(props) {
  const [state, setState] = useState({ displayName: '' });

  const submitForm = (event) => {
    event.preventDefault();
    props.onEnter(state);
  }

  const updateState = (event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <Component
      onSubmit={submitForm}
      onChange={updateState}
      formState={state}
    />
  );
}