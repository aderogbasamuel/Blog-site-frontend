console.log("App loaded");
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Home from "./src/home/home.js"
import BlogPage from "./src/blogPage/Blog.js"
const { useState, useEffect } = React;
console.log(window.location.pathname);


function App() {
  return (
    <HashRouter>
      <Switch>
        
        <Route exact path="/" component={Home}/>
        <Route exact path="/blog/:id" component={BlogPage}/>
      </Switch>
    </HashRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);