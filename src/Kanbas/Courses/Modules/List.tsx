import React, { useState } from 'react';
import './index.css';
import { modules } from '../../Database';
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from 'react-icons/fa';
import { useParams } from 'react-router';
function ModuleList() {
  const { courseId } = useParams();
  const [moduleList, setModuleList] = useState<any[]>(modules);
  const [module, setModule] = useState({
    name: 'New Module',
    description: 'New Description',
    course: courseId,
  });

  console.log('cid', courseId);

  const addModule = (module: any) => {
    const newModule = { ...module, _id: new Date().getTime().toString() };
    const newModuleList = [newModule, ...moduleList];
    console.log('newModuleList', newModuleList);
    setModuleList(newModuleList);
  };
  const deleteModule = (moduleId: string) => {
    const newModuleList = moduleList.filter(module => module._id !== moduleId);
    setModuleList(newModuleList);
  };
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
            onChange={e =>
              setModule({
                ...module,
                name: e.target.value,
              })
            }
          />
          <textarea
            value={module.description}
            onChange={e =>
              setModule({
                ...module,
                description: e.target.value,
              })
            }
          />
          <button
            onClick={() => {
              addModule(module);
            }}>
            Add
          </button>
        </li>

        {moduleList
          .filter(module => module.course === courseId)
          .map((module, index) => (
            <li key={index} className='list-group-item' onClick={() => setSelectedModule(module)}>
              <button onClick={() => deleteModule(module._id)}>Delete</button>
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
