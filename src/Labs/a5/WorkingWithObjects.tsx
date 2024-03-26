import React, { useState } from 'react';
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: 'NodeJS Assignment',
    description: 'Create a NodeJS server with ExpressJS',
    due: '2021-10-10',
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_URL = 'http://localhost:4000/a5/assignment';

  const [module, setModule] = useState({
    id: 1,
    name: 'NodeJS',
    description: 'NodeJS is a JavaScript runtime built on Chrome V8 JavaScript engine',
    course: 'CS572',
  });
  const MODULE_URL = 'http://localhost:4000/a5/module';
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <input
        type='text'
        onChange={e => setAssignment({ ...assignment, title: e.target.value })}
        value={assignment.title}
      />
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`} className='btn btn-primary'>
        Update Title
      </a>

      <h4>Retrieving Objects</h4>
      <a href='http://localhost:4000/a5/assignment' className='btn btn-primary'>
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href='http://localhost:4000/a5/assignment/title' className='btn btn-primary'>
        Get Title
      </a>

      <h4>MODULES</h4>
      <h4>Modifying Properties</h4>
      <h5>Name</h5>
      <input
        type='text'
        onChange={e => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />
      <a href={`${MODULE_URL}/name/${module.name}`} className='btn btn-primary'>
        Update Name
      </a>
      <h5>Description</h5>
      <input
        type='text'
        onChange={e => setModule({ ...module, description: e.target.value })}
        value={module.description}
      />
      <a href={`${MODULE_URL}/description/${module.description}`} className='btn btn-primary'>
        Update Description
      </a>
      <h4>Retrieving Objects</h4>
      <a href='http://localhost:4000/a5/module' className='btn btn-primary'>
        Get Module
      </a>
      <h4>Retrieving Name</h4>
      <a href='http://localhost:4000/a5/module/name' className='btn btn-primary'>
        Get Module Name
      </a>
    </div>
  );
}
export default WorkingWithObjects;
