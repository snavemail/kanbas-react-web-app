import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

function CourseNavigation() {
  const links = [
    'Home',
    'Modules',
    'Piazza',
    'Zoom Meetings',
    'Assignments',
    'Quizzes',
    'Grades',
    'People',
    'Panopto Videos',
    'Discussions',
    'Announcements',
    'Pages',
    'Files',
    'Rubrics',
    'Outcomes',
    'Collaborations',
    'Syllabus',
    'Settings',
  ];
  const { pathname } = useLocation();
  return (
    <div className='course-navigation-wrapper'>
      <div className='sticky-wrapper'>
        <ul className='wd-navigation'>
          {links.map((link, index) => (
            <li key={index} className={pathname.includes(link) ? 'wd-active' : ''}>
              <Link to={link}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default CourseNavigation;
