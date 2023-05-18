import React from 'react';
import './App.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Pages/Main';
import List from './Pages/List';
import Bookmark from './Pages/Bookmark';
//필요한 컴포넌트들을 위와 같이 import 해준다.

const App = () =>{
  return (
    <BrowserRouter>
    <Header/>
    <div className='wrapper'>  
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/products/list" element={<List/>}></Route>
        <Route path="/bookmark" element={<Bookmark/>}></Route>
      </Routes>  
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
