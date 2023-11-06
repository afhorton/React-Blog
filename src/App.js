import React from 'react'
import CreateBlog from './components/blogs/create';
import BlogList from './components/blogs/bloglist';
import BlogView from "./show";
import BlogEdit from "./components/blogs/edit"

import Home from "./components/pages/home";
import { NavBar } from './components/temps/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (

   
   <Router>
    <h1>Hello!</h1>
    {/* <NavBar /> */}
    <Routes>
      {/* <Route exact path='/' element={<Home />} /> */}
       <Route exact path='/blogs/' element={<BlogList />} />
      
      <Route path='/blogs/create' element={<CreateBlog/>} />
      <Route path='/blogs/:id' element={<BlogView />} />
      <Route path='/blogs/edit/:id' element={<BlogEdit/>} /> 
    </Routes>
   </Router>
  );
}

export default App;
