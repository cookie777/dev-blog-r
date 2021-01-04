import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Test from './Test';


function App() {
  const [content, setContent] = useState();

  useEffect(()=>{
    const readmePath = require("./post/first.md");

    fetch(readmePath.default)
      .then(response => {
        return response.text()
      })
      .then(text => {
        setContent(text)
      })
      
  },[])


  return (
    <div>
    {/* <div className="content">
      <ReactMarkdown source={content} />
    </div> */}

    <Router>
    <div>
      aaaa
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/post/first">first</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      <Route path="/test">
          <Test />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/post/first">
          <ReactMarkdown source={content} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
    </div>
  
  );
}

export default App;


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
