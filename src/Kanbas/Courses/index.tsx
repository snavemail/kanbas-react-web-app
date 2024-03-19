import React from 'react';
import { useParams } from 'react-router-dom';
import { HiMiniBars3 } from 'react-icons/hi2';
import Modules from './Modules';
import CourseNavigation from './Navigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Assignments from './Assignments';
import './index.css';

function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const course = courses.find(course => course._id === courseId);
  return (
    <>
      <h1 style={{ color: 'red' }}>
        <HiMiniBars3 /> Course {course?.number}
      </h1>
      <div className='main'>
        <CourseNavigation />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Navigate to='Home' />} />
            <Route path='Home' element={<Home />} />
            <Route path='Modules' element={<Modules />} />
            <Route path='Piazza' element={<h1>Piazza</h1>} />
            <Route path='Assignments' element={<Assignments />} />
            <Route path='Assignments/:assignmentId' element={<h1>Assignment Editor</h1>} />
            <Route path='Grades' element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Courses;
