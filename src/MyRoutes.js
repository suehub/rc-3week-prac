import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
import NotFound from './pages/NotFound';
import Roadmaps from './pages/Roadmaps';
import Header from './components/Header';
import Resister from './pages/Resister';
import CourseDetail from './pages/CourseDetail';
import Result from './pages/Result';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resister' element={<Resister />} />
        <Route path='/course' element={<Course />} />
        <Route path='/course/:id' element={<CourseDetail />} />
        <Route path='/result/:id' element={<Result />} />
        <Route path='/roadmaps' element={<Roadmaps />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
