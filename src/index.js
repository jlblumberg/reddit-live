import React, { useState } from 'react';
import ReactDom from 'react-dom';
import "./index.css";

function Room() {
  const [isLit, setLit] = useState(false);
  const brightness = isLit ? "lit" : "dark";
  const [temp, setTemp] = useState(22)

  return (
    <div className={`room ${brightness}`}>
      The room is {brightness} <br />
      It is {temp} degrees in here <br />
      <button onClick={() => setLit(true)}>Lights on</button>
      <button onClick={() => setLit(false)}>Lights off</button><br />
      <button onClick={() => setTemp(temp + 1)}>Temp +</button>
      <button onClick={() => setTemp(temp - 1)}>Temp -</button>
    </div>
  );
}

ReactDom.render(<Room/>, document.getElementById('root'));