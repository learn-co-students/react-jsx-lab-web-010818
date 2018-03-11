// components/Webpage.js file, create a React component called Webpage.
// This component should contain a title with the text The world's coolest webpage.
// This component should also contain two instances of the FillerText component.
import React from 'react';
import FillerText from './FillerText';

class Webpage extends React.Component {
  render() {
    return (
      <div>
        <h1>The world's coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}

export default Webpage;
