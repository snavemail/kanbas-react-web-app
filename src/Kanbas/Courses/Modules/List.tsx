import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module._id === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <hr />
      <div className="wd-button-container">
        <button className="wd-button wd-button-gray">Collapse All</button>
        <button className="wd-button wd-button-gray">View Progress</button>

        <select id="select-one" className="wd-select-gray">
          <option selected value="PUBLISH ALL">
            &#x2714; Publish All
          </option>
        </select>

        <button className="wd-button wd-button-red">
          <i className="fa fa-plus"></i>
          Module
        </button>
        <button className="wd-button wd-button-gray">
          <i className="fa fa-ellipsis-v"></i>
        </button>
      </div>

      <hr />
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
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
