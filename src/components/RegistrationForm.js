import React from 'react';

// class RegistrationForm extends React.Component {
//   render() {
//     return (
//       <form method="post">
//         <input type="text">
//         <input type="password">
//
//       </form>
//     )
//   }
// }

class RegistrationForm extends React.Component {
  render() {
    return React.createElement('form', {method:"post"}, [
      React.createElement('input', {type:"text"}),
      React.createElement('input', {type:"password"}),
      React.createElement('button', {type:"submit"}, "Submit")
    ])
  }
}

export default RegistrationForm;
