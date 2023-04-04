import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Nav from './Nav';
import Blog from './Blog';
import Update from './Update';
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path='update/:id' element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main