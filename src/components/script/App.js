import React from 'react'
import CreateBlog from '../blogs/create';
import BlogList from '../blogs/bloglist';
import BlogView from "../blogs/show";
import BlogEdit from "../blogs/edit"

import Home from "../pages/home";
import { NavBar } from '../temps/NavBar';
import './App.css';
import { Router } from 'express';


function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/blog/' element={<BlogList />} />
      
      <Route path='/blog/create' element={<CreateBlog/>} />
      <Route path='/blog/:id' element={<BlogView />} />
      <Route path='/blog/edit/:id' element={<BlogEdit/>} />
    </Routes>
   </Router>
  );
}

export default App;
