import {React, Suspense} from 'react';
import './App.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Pages/Main';
import ProductList from './Pages/ProductList';
import BookmarkList from './Pages/BookmarkList';
import { ToastContainer, Slide } from 'react-toastify';

const App = () =>{
  return (
    <BrowserRouter>
    <ToastContainer position='bottom-right'
        autoClose={2000}
        hideProgressBar={true}
        closeButton={false}
        pauseOnFocusLoss={false}
        transition={Slide}/>
    <Header/>
    <div className='wrapper'>  
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/products/list" element={<ProductList/>}></Route>
        <Route path="/bookmark" element={<BookmarkList/>}></Route>
      </Routes>  
      </Suspense>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
