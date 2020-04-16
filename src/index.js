import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Reddit() {
  const [posts, setPosts] = useState([]);
  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Reddit/>, document.getElementById("root"));