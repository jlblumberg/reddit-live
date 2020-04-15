import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

function Hi() {
  return <div>
          <strong>Hello Josh!</strong>
          <h2>Your age: {10 + 14}</h2>
          <h3>Your favourite languages:</h3>
          <ul>
            <li>JavaScript</li>
            <li>Ruby</li>
          </ul>
         </div>;
}

ReactDom.render(<Hi/>, document.querySelector('#root'));