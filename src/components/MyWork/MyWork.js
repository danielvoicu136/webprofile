import React from "react";
import resumeData from '../../utils/resumeData';
import "./MyWork.css";

const MyWork = () => {
  const { currentStatus, roles, tasks, experiences } = resumeData;

  return (
    <div className="profile-container box_style">
      <h3 className="profile-header">{currentStatus}</h3>
      <p className="profile-roles">{roles}</p>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      {experiences.map((exp, index) => (
        <div key={index} className="experience">
          <h4>{exp.yearRange} - {exp.company} - {exp.position}</h4>
          <p className="position">{exp.duration}</p>
          <ul>
            {exp.responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
          <h4>Tools:</h4>
          <p>{exp.tools.join(" , ")}</p>
        </div>
      ))}
    </div>
  );
};

export default MyWork;
