import React, {useRef, useState} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ExamplePage from './Pages/ExamplePage';
import CustomHookPage from './Pages/CustomHookPage';
import './App.css';


function App() {
  
  return (
    <>
       <BrowserRouter>
       <Switch>
          <Route path='/' render={() => <HomePage/>} exact={true}/>
          <Route path='/example' render={() => <ExamplePage/>} exact={true}/>
          <Route path='/fetch' render={() => <CustomHookPage url={"https://jsonplaceholder.typicode.com/posts?_start=1&_limit=2"}/>} exact={true}/>
       </Switch>
       </BrowserRouter>
    </>
  );
}

export default App;
