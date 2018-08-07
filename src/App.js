import React, { Component } from 'react';
import {HashRouter,Link,Switch} from 'react-router-dom';
import Routes from './routes.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <div className='link-wrap'>
              <Link to='/' className='links'>Home</Link>
              <Link to='/about' className='links'>About</Link> 
          </div>
        </nav>
          {Routes}
      </div>
    )
  }
}




{/* <div className='link-wrap'>
              <div className='links'>Home</div>
              <div className='links'>About</div>  */}