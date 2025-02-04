import React, { useState, useEffect } from "react";
import "./MyTools.css"; 
import toolsData from "../../utils/toolsData"


const MyTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    setTools(toolsData); 
  }, []);

  return (
    <div className="my-tools">
      {tools.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.category}</h2>
          <div className="tools-list">
            {category.tools.map((tool, idx) => (
              <span key={idx} className="tool">
                <i
                  className={tool.icon}
                  style={{ color: tool.color, marginRight: "0.5rem" }}
                ></i>
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyTools;
