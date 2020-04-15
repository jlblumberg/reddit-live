import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

function Hi(props) {
  return <div>Hello {props.name}!</div>;
}

ReactDom.render(<Hi name="Josh"/>, document.querySelector('#root'));