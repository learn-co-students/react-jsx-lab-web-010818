// RegistrationForm.
// This component should contain the following:
// One <form> element
// Two <input> elements — one has a text type, the other one is a password
// One <button> element with the submit type
import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        Name: <input type="text" name="name"/><br/>
        Password: <input type="password" name="password"/><br/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RegistrationForm;
