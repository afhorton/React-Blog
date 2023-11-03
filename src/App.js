import React from 'react'
import CreateBlog from './create';
import BlogList from './bloglist';
import BlogView from "./show";
import BlogEdit from "./edit"

import Home from "./components/pages/home";
import { NavBar } from './components/temps/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
   <Router>
    <NavBar />
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
