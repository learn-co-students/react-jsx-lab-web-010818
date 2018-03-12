import React from 'react';

class RegistrationForm extends React.Component{
  render(){
    return(
      <form>
        <input type='text' placeholder="username"></input>
        <input type='password' placeholder="password"></input>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default RegistrationForm;
