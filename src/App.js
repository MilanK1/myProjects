
import 'antd/dist/antd.css' 

import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Content from "./components/Content/Content"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import PageOne from "./components/Page1"
import PageTwo from "./components/Page2"
import Projects from './components/Projects'
import 'antd/dist/antd.css';
import React, { useState } from 'react';


function App(props) {


  return (
    <BrowserRouter>
    <div className="App">
 <Header/>

 <Content/>
 <hr/>
 <Route path="/Page1" render={PageOne}/>
<Route path="/Page2" render={PageTwo}/>
<Route path="/Projects" render={Projects}/>
 <hr/>

 <Footer/>
    
    
    </div>
    </BrowserRouter>
  );
}

export default App;
