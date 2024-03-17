import React, { useState } from 'react';
import './index.css';
import { modules } from '../../Database';
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from 'react-icons/fa';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { addModule, deleteModule, updateModule, setModule } from './reducer';
import { KanbasState } from '../../store';

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
      <hr />
      <div className='wd-button-container'>
        <button className='wd-button wd-button-gray'>Collapse All</button>
        <button className='wd-button wd-button-gray'>View Progress</button>

        <select id='select-one' className='wd-select-gray'>
          <option selected value='PUBLISH ALL'>
            &#x2714; Publish All
          </option>
        </select>

        <button className='wd-button wd-button-red'>
          <i className='fa fa-plus'></i>
          Module
        </button>
        <button className='wd-button wd-button-gray'>
          <i className='fa fa-ellipsis-v'></i>
        </button>
      </div>

      <hr />
      <ul className='list-group wd-modules'>
        <li className='list-group-item module-form'>
          <input
            value={module.name}
            onChange={e => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea
            value={module.description}
            onChange={e => dispatch(setModule({ ...module, description: e.target.value }))}
          />
          <div className='btn-container'>
            <button
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}
              className='btn btn-success'>
              Add
            </button>
            <button onClick={() => dispatch(updateModule(module))} className='btn btn-primary'>
              Update
            </button>
          </div>
        </li>

        {moduleList
          .filter(module => module.course === courseId)
          .map((module, index) => (
            <li key={index} className='list-group-item' onClick={() => setSelectedModule(module)}>
              <div className='btn-container'>
                <button
                  onClick={event => {
                    dispatch(setModule(module));
                  }}
                  className='btn btn-warning'>
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteModule(module._id))}
                  className='btn btn-danger'>
                  Delete
                </button>
              </div>

              <div>
                <FaEllipsisV className='me-2' />
                {module.name}
                <span className='float-end'>
                  <FaCheckCircle className='text-success' />
                  <FaPlusCircle className='ms-2' />
                  <FaEllipsisV className='ms-2' />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className='list-group'>
                  {module.lessons?.map((lesson: any) => (
                    <li className='list-group-item'>
                      <FaEllipsisV className='me-2' />
                      {lesson.name}
                      <span className='float-end'>
                        <FaCheckCircle className='text-success' />
                        <FaEllipsisV className='ms-2' />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
