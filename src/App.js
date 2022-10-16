import React from "react";
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Ask from './pages/Ask';
import Help from './pages/Help';
import {Routes, Route} from 'react-router-dom';
import './App.css';

// npm install --save react-router-dom
// https://www.youtube.com/watch?v=xMNhDf5-hvk

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/ask" exact element={<Ask/>}/>
          <Route path="/help" exact element={<Help/>}/>
        </Routes>

      </div>
    );
  }
    
}
      
export default App;
