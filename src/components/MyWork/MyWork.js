import React from "react";
import resumeData from "../../utils/resumeData";
import "./MyWork.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

const MyWork = () => {
  const { currentStatus, roles, tasks, experiences } = resumeData;

  return (
    <div className="profile-container box_style">
      <h4 className="profile-header">{currentStatus}</h4>
      <p className="profile-roles">{roles}</p>

      {/* Task List */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <i className="fas fa-check-circle task-icon"></i> {task}
          </li>
        ))}
      </ul>

      {/* Experiences */}
      {experiences.map((exp, index) => (
        <div key={index} className="experience">
          <h4>{exp.yearRange} - {exp.company} - {exp.position}</h4>
          <p className="position">{exp.duration}</p>
          
          {/* Responsibilities List */}
          <ul className="responsibilities-list">
            {exp.responsibilities.map((res, i) => (
              <li key={i}>
                {/** <i className="fa-solid fa-check responsibility-icon"></i> {res} */}
                <i className="fa-regular fa-circle-check responsibility-icon"></i> {res}
                
              </li>
            ))}
          </ul>

          {/* Tools */}
          <h4>Tools:</h4>
          <p>{exp.tools.join(" , ")}</p>
        </div>
      ))}
    </div>
  );
};

export default MyWork;
