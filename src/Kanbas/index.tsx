import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import KanbasNavigation from './Navigation';
import Dashboard from './Dashboard';
import Courses from './Courses';
import { courses as dbCourses } from './Database';
import './index.css';

function Kanbas() {
  const [courses, setCourses] = useState(dbCourses);
  const [course, setCourse] = useState({
    _id: '0',
    name: 'New Course',
    number: 'New Number',
    startDate: '2023-09-10',
    endDate: '2023-12-15',
    image: '/react.png',
  });

  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (id: string) => {
    setCourses(courses.filter(course => course._id !== id));
  };
  const updateCourse = () => {
    setCourses(
      courses.map(c => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      }),
    );
  };
  return (
    <div className='d-flex'>
      <KanbasNavigation />
      <div className='kanbas-main-wrapper'>
        <Routes>
          <Route path='/' element={<Navigate to='Dashboard' />} />
          <Route path='Account' element={<h1>Account</h1>} />
          <Route
            path='Dashboard'
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route path='Courses/:courseId/*' element={<Courses courses={courses} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Kanbas;
