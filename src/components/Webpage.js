import React from 'react';
import FillerText from './FillerText'

class Webpage extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('h1', {}, "The world's coolest webpage"),
      React.createElement(FillerText),
      React.createElement(FillerText)
    ])
  }
}

export default Webpage;
