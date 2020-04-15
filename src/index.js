import React from 'react';
import ReactDom from 'react-dom';

function Room() {
  return (
    <div className="room">The room is lit</div>
  );
}

ReactDom.render(<Room />, document.getElementById('root'));