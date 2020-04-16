import React, { useState } from 'react';
import ReactDom from 'react-dom';
import "./index.css";

function Room() {
  const [isLit, setLit] = useState(false);
  const brightness = isLit ? "lit" : "dark";

  return (
    <div className={`room ${brightness}`}>
      The room is {brightness}
      <br/>
      <button onClick={() => setLit(true)}>
        On
      </button>
      <button onClick={() => setLit(false)}>
        Off
      </button>
    </div>
  );
}

ReactDom.render(<Room/>, document.getElementById('root'));