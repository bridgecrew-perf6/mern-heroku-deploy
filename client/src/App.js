import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fecthPosts = async () => {
       
      try {
        const kittens =  await fetch('/api/kittens');

        const { data } = await kittens.json();
        
        setPosts(data);
       
      } catch (error) {
        console.log(error);
      }
    };

    fecthPosts();
  }, 1);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
          Hello Dayher!
        </p>

        <div>
            {posts.map((post) => (
              <p>{post.name}</p>
            ))}
            
          </div> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;