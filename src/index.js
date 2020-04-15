import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

const Hi = ({name}) => {
  return <div>Hello {name}!</div>;
}

const MediaCard = ({title, body, imageUrl}) => {
  return <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <img src={imageUrl}/>
          </div>
}

const Gate = ({isOpen}) => {
  return <div>{isOpen ? "Open" : "Closed"}</div>
}

// ReactDom.render(<Hi name="Josh"/>, document.querySelector('#root'));
// ReactDom.render(<MediaCard title="This is the title" body="This is the body" imageUrl="https://i.imgur.com/aoMI4WQ.png"/>, document.querySelector('#root'));
ReactDom.render(<Gate isOpen={false}/>, document.querySelector('#root'));