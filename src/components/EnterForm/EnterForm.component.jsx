import "./EnterForm.styles.scss";

import { InputFormField } from "../InputFormField";
import { Button } from "../Button";

export function EnterForm(props) {
  return (
    <form
      className="enter-form"
      autoComplete="off"
      onSubmit={props.onSubmit}
    >
      <div className="enter-form__field">
        <InputFormField
          name="displayName"
          id="display-name"
          label="Name"          
          onChange={props.onChange}
          value={props.formState.displayName}
          required
        />
      </div>
      <div className="enter-form__field">
        <Button variant="text"><span className="no-hover">Enter</span><span className="hover-text">at your own risk</span></Button>
      </div>
    </form>
  );
}