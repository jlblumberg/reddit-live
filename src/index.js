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
      <button onClick={() => setLit(!isLit)}>
        flip
      </button>
    </div>
  );
}

ReactDom.render(<Room/>, document.getElementById('root'));