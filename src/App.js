import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ShowPosts from './components/showPosts';
import Addpost from './components/addPost';
import About from './components/About';
import NavBar from './components/NavBar';
import ShowPost from './components/showPost';




class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="container">
            <Route exact path="/" component={ShowPosts} />
            <Route path="/add-post" component={Addpost} />
            <Route path="/about" component={About} />
            <Route path="/posts/:id" component={ShowPost} />

          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
