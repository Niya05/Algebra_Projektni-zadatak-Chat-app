import "./JoinForm.styles.scss";

import { InputFormField } from "../InputFormField";
import { Button } from "../Button";

export function JoinForm(props) {
  return (
    <form
      className="join-form"
      autoComplete="off"
      onSubmit={props.onSubmit}
    >
      <div className="join-form__field">
        <InputFormField
          name="displayName"
          id="display-name"
          label="Name"          
          onChange={props.onChange}
          value={props.formState.displayName}
          required
        />
      </div>
      <div className="join-form__field">
        <Button variant="text"><span className="no-hover">Enter</span><span className="hover-text">at your own risk</span></Button>
      </div>
    </form>
  );
}